import React, { useEffect } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import LearningSettings from "../components/learning/LearningSettings";
import NextPage from "../components/learning/NextPage";
import { getQuestions } from "../store/actions/questionsActions";
import SearchForm from "../components/learning/SearchForm";
import GoToQuestionNumber from "../components/learning/GoToQuestionNumber";

const Learning = props => {
  const { allQuestions, kat, lang, cqi, perPage } = props;
  const { getQuestions } = props;

  useEffect(() => {
    getQuestions(kat, lang); // automaticaly get allQuestions when component is mounted
  }, [kat, lang]);

  let allQuestionsSearched = allQuestions.filter(item =>
    item.t.includes(props.search)
  );
  return (
    <>
      <SearchForm />

      <NextPage amount={allQuestionsSearched.length} />

      {props.search !== "" && (
        <h1 className="text-center">
          Znaleziono <strong>{allQuestionsSearched.length}</strong> pytania ze{" "}
          {allQuestions.length}
        </h1>
      )}
      {allQuestionsSearched.slice(cqi, cqi + perPage).map(question => (
        <Question key={question.id} question={question} />
      ))}
      <NextPage amount={allQuestionsSearched.length} />
      <LearningSettings />
    </>
  );
};

const mapStateToProps = state => {
  return {
    allQuestions: state.questionsReducer.allQuestions,
    kat: state.questionsReducer.kat,
    lang: state.questionsReducer.lang,
    cqi: state.questionsReducer.cqi,
    perPage: state.questionsReducer.perPage,
    search: state.questionsReducer.search
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
