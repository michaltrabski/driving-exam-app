import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import Settings from "../components/Settings";
import QuestionNavigation from "./../components/QuestionNavigation";
import { getQuestions } from "../store/actions/questionsActions";
import { Button } from "react-bootstrap";

const Learning = props => {
  const [questions, setQuestions] = useState([]);

  // automaticaly get allQuestions when component is mounted
  useEffect(() => {
    props.getQuestions(props.kat, props.lang);
  }, []);

  //when questionsAll has changed (expl: user changed kat or lang), then change questions than I work with inside this component
  useEffect(() => {
    setQuestions(props.questionsAll.slice(0, 3));
  }, [props.questionsAll]);

  return (
    <>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
      <Button onClick={() => props.getQuestions("b", "eng")}>X</Button>
      <QuestionNavigation />
      <Settings />
    </>
  );
};

const mapStateToProps = state => {
  return {
    questionsAll: state.questionsReducer.questionsAll,
    kat: state.questionsReducer.kat,
    lang: state.questionsReducer.lang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: (kat, lang) => {
      dispatch(getQuestions(kat, lang));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Learning);
