import React from "react";
import Question from "../components/learning/Question";
import { useSelector } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";
import { filterQuestions, SHOW_ALL } from "../functions/functions";
import Add from "../components/Add";
import Loading from "../components/learning/Loading";
import FilteresOutInfo from "../components/learning/FilteredOutInfo";
import { GetQuestions } from "../functions/functionalComponents";

const Learning = () => {
  let { allQuestions, cqi, perPage, search, filterOption } = useSelector(
    state => state.questionsReducer
  );

  // filter array based on search result
  allQuestions = allQuestions.filter(question => {
    let q = question.t.toLowerCase();
    let s = search.toLowerCase();
    return q.indexOf(s) === -1 ? false : true;
  });

  // filter array based on filter that user choose
  if (filterOption !== SHOW_ALL) {
    allQuestions = allQuestions.filter(question =>
      filterQuestions(question, filterOption)
    );
  }

  let amount = allQuestions.length;

  return (
    <>
      <GetQuestions />
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
      <FilteresOutInfo amount={amount} />
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
