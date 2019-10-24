import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import Settings from "../components/Settings";
import QuestionNavigation from "./../components/QuestionNavigation";
import { getQuestions } from "../store/actions/questionsActions";
import { Button } from "react-bootstrap";
import _ from "lodash";

const Learning = props => {
  const { questionsAll, kat, lang, getQuestions, perPageDefault } = props;
  const [questionsToDisplay, setQuestionsToDisplay] = useState([]);
  const [current, setCurrent] = useState(0);
  const [perPage] = useState(perPageDefault);

  // automaticaly get allQuestions when component is mounted
  useEffect(() => {
    getQuestions(kat, lang);
  }, [kat, lang]);

  //when questionsAll has changed (expl: user changed kat or lang), then change questions than I work with inside this component
  useEffect(() => {
    let slice = _.slice(questionsAll, current);
    let take = _.take(slice, perPage);
    setQuestionsToDisplay(take);
  }, [questionsAll, current]);

  const nextQuestions = () => {
    if (current + perPage < questionsAll.length) {
      window.scrollTo(0, 0);
      setCurrent(current + perPage);
    }
  };
  const prevQuestions = () => {
    if (current - perPage >= 0) {
      window.scrollTo(0, 0);
      setCurrent(current - perPage);
    }
  };
  return (
    <>
      <QuestionNavigation
        prevQuestions={prevQuestions}
        prevQuestionsDisabled={current <= 0 ? true : false}
        nextQuestions={nextQuestions}
        nextQuestionsDisabled={false}
      />

      {questionsToDisplay.map(question => (
        <Question key={question.id} question={question} />
      ))}

      <QuestionNavigation
        prevQuestions={prevQuestions}
        prevQuestionsDisabled={current <= 0 ? true : false}
        nextQuestions={nextQuestions}
        nextQuestionsDisabled={false}
      />
      <Settings />
    </>
  );
};

const mapStateToProps = state => {
  return {
    questionsAll: state.questionsReducer.questionsAll,
    kat: state.questionsReducer.kat,
    lang: state.questionsReducer.lang,
    perPageDefault: state.questionsReducer.perPageDefault
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
