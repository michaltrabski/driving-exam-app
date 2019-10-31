import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import LearningSettings from "../components/learning/LearningSettings";
import LearningPagination from "../components/navigation/LearningPagination";
import { getQuestions } from "../store/actions/questionsActions";
import _ from "lodash";

const Learning = props => {
  const { questionsAll, kat, lang, getQuestions, perPageDefault } = props;
  const [questionsToDisplay, setQuestionsToDisplay] = useState([]);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [perPage] = useState(perPageDefault);

  // automaticaly get allQuestions when component is mounted
  useEffect(() => {
    getQuestions(kat, lang);
  }, [kat, lang]);

  //when questionsAll has changed (expl: user changed kat or lang), then change questions than I work with inside this component
  useEffect(() => {
    let slice = _.slice(questionsAll, currentQuestionIndex);
    let take = _.take(slice, perPage);
    setQuestionsToDisplay(take);
  }, [questionsAll, currentQuestionIndex]);

  const nextPage = () => {
    if (currentQuestionIndex + perPage < questionsAll.length) {
      window.scrollTo(0, 0);
      setcurrentQuestionIndex(currentQuestionIndex + perPage);
    }
  };
  const previousPage = () => {
    if (currentQuestionIndex - perPage >= 0) {
      window.scrollTo(0, 0);
      setcurrentQuestionIndex(currentQuestionIndex - perPage);
    }
  };

  const exactPage = page => {
    window.scrollTo(0, 0);
    setcurrentQuestionIndex(perPage * page - perPage);
  };

  const pagination = (
    <LearningPagination
      perPage={perPage}
      currentQuestionIndex={currentQuestionIndex}
      questionsAll={questionsAll}
      previousPage={previousPage}
      nextPage={nextPage}
      exactPage={exactPage}
    />
  );
  return (
    <>
      {perPage === 1 || pagination}
      {questionsToDisplay.map(question => (
        <Question key={question.id} question={question} />
      ))}
      {pagination}
      <LearningSettings />
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
