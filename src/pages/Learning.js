import React from "react";
import Question from "../components/learning/Question";
import { useSelector } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";
import { filterQuestions } from "../functions/functions";
import Add from "../components/Add";
import Loading from "../components/learning/Loading";

const Learning = () => {
  const { got, cqi, perPage, search, filterOption } = useSelector(
    state => state.questionsReducer
  );
  let { allQuestions } = useSelector(state => state.questionsReducer);

  // filter array based on search result
  allQuestions = allQuestions.filter(question =>
    question.t.includes(search.toLowerCase())
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
      {/* <h1>{got.a ? "pobrane" : "NIEpobrane"}</h1>
      <h1>{amount}</h1> */}
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

      <Loading />

      {allQuestions.slice(cqi, cqi + perPage).map((question, i) => {
        return (
          <>
            <Question key={question.id} question={question} />
            {i === 2 && <Add />}
            {i === 5 && <Add />}
            {i === perPage - 1 && <Add />}
          </>
        );
      })}

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

export default Learning;
