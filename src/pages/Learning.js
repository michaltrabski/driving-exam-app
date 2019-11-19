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
  const { cqi, perPage, search, filterOption } = useSelector(
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
          <React.Fragment key={question.id}>
            <Question question={question} />
            {i === 2 && <Add />}
            {i === 5 && <Add />}
            {i === perPage - 1 && <Add />}
          </React.Fragment>
        );
      })}

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
