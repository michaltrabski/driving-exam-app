import React from "react";
import Question from "../components/learning/Question";
import { connect, useSelector } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container } from "../elements/elements";

const Learning = props => {
  const userData = useSelector(state => state.userReducer);
  const { allQuestions, cqi, perPage } = props;

  let allQuestionsSearched = allQuestions.filter(item =>
    item.t.includes(props.search.toLowerCase())
  );

  return (
    <>
      userData = {JSON.stringify(userData)}
      <Container>
        <SearchForm amount={allQuestionsSearched.length} />
        <NextPage amount={allQuestionsSearched.length} />
      </Container>
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
    cqi: state.questionsReducer.cqi,
    perPage: state.questionsReducer.perPage,
    search: state.questionsReducer.search
  };
};

export default connect(mapStateToProps)(Learning);
