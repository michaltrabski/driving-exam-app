import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import LearningSettings from "../components/learning/LearningSettings";
import LearningPagination from "../components/navigation/LearningPagination";
import { getQuestions } from "../store/actions/questionsActions";
import _ from "lodash";

const Learning = props => {
  const { filteredQuestions, kat, lang, getQuestions } = props;
  // automaticaly get allQuestions when component is mounted
  useEffect(() => {
    getQuestions(kat, lang);
  }, [kat, lang]);

  return (
    <>
      <LearningPagination />
      {filteredQuestions.map(question => (
        <Question key={question.id} question={question} />
      ))}

      {/* <LearningSettings /> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    allQuestions: state.questionsReducer.allQuestions,
    filteredQuestions: state.questionsReducer.filteredQuestions,
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
