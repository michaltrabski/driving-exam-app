import React from "react";
import Question from "../components/learning/Question";
import { connect, useSelector } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";
import { filterQuestions } from "../functions/functions";

const Learning = props => {
  const filterOption = useSelector(
    state => state.questionsReducer.filterOption
  );
  const { cqi, perPage } = props;

  let { allQuestions } = props;

  // filter array based on search result
  allQuestions = allQuestions.filter(question =>
    question.t.includes(props.search.toLowerCase())
  );

  // filter array based on filter that user choose
  if (filterOption !== "SHOW_ALL") {
    allQuestions = allQuestions.filter(question =>
      filterQuestions(question, filterOption)
    );
  }

  let amount = allQuestions.length;

  return (
    <>
      <Container>
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
      <SearchInfo amount={amount} />
      {allQuestions.slice(cqi, cqi + perPage).map(question => (
        <Question key={question.id} question={question} />
      ))}

      {/* <Container>
        <Row mb>
          <Col pr>ostatnie pytanie</Col>
        </Row>
      </Container> */}

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
