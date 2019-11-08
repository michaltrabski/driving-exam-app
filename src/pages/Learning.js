import React from "react";
import Question from "../components/learning/Question";
import { connect, useSelector } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";

const Learning = props => {
  const userData = useSelector(state => state.userReducer);
  const { allQuestions, cqi, perPage } = props;

  let allQuestionsSearched = allQuestions.filter(item =>
    item.t.includes(props.search.toLowerCase())
  );

  let allQuestionsFiltered = allQuestionsSearched;

  return (
    <>
      {/* userData = {JSON.stringify(userData)} */}
      <Container>
        <SearchInfo amount={allQuestionsSearched.length} />
        <Row mb>
          <Col pr>
            <Filters />
          </Col>
          <Col pl>
            <SearchForm />
          </Col>
        </Row>
        <NextPage amount={allQuestionsSearched.length} />
      </Container>
      {allQuestionsFiltered.slice(cqi, cqi + perPage).map(question => (
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
