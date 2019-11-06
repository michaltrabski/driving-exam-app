import React, { useEffect } from "react";
import Question from "../components/Question";
import { connect } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import { getQuestions } from "../store/actions/questionsActions";
import SearchForm from "../components/learning/SearchForm";
import { Container } from "../elements/elements";
import Resize from "./../components/Resize";

const Learning = props => {
  const { allQuestions, kat, lang, cqi, perPage } = props;
  const { getQuestions } = props;
  const width = Resize();

  useEffect(() => {
    getQuestions(kat, lang); // automaticaly get allQuestions when component is mounted
  }, [kat, lang]);

  let allQuestionsSearched = allQuestions.filter(item =>
    item.t.includes(props.search.toLowerCase())
  );

  return (
    <>
      <Container>
        <SearchForm amount={allQuestionsSearched.length} />
        <NextPage amount={allQuestionsSearched.length} />
      </Container>
      {/* {props.search !== "" && width >= 768 && (
        <h1 className="text-center">
          <SearchInfo amount={allQuestionsSearched.length} />
        </h1>
      )} */}
      {allQuestionsSearched.slice(cqi, cqi + perPage).map(question => (
        <Question key={question.id} question={question} />
      ))}

      {allQuestionsSearched.length > 0 && (
        <Container>
          <NextPage amount={allQuestionsSearched.length} />
        </Container>
      )}

      <Settings />
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
