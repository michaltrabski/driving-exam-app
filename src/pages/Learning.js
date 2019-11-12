import React from "react";
import Question from "../components/learning/Question";
import { connect } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";
import { filterRightAnswers } from "../functions/functions";
import { filterWrongAnswers } from "./../functions/functions";

const Learning = props => {
  const { cqi, perPage } = props;

  let { allQuestions } = props;

  // filter array based on search result
  allQuestions = allQuestions.filter(question =>
    question.t.includes(props.search.toLowerCase())
  );

  // filter array based on filter that user choose

  // allQuestions = allQuestions;
  // .filter(filterRightAnswers)
  // .filter(filterWrongAnswers);

  let amount = allQuestions.length;

  return (
    <>
      <Container>
        <SearchInfo amount={amount} />
        <Row mb>
          <Col pr>
            <Filters />
          </Col>
          <Col pl>
            <SearchForm />
          </Col>
        </Row>
        <NextPage amount={amount} />
      </Container>
      {allQuestions.slice(cqi, cqi + perPage).map(question => (
        <Question key={question.id} question={question} />
      ))}
      {amount > 0 && (
        <Container>
          <NextPage amount={amount} />
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
