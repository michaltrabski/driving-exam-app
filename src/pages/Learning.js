import React from "react";
import Question from "../components/learning/Question";
import { connect, useSelector } from "react-redux";
import Settings from "../components/learning/Settings";
import NextPage from "../components/learning/NextPage";
import SearchForm from "../components/learning/SearchForm";
import { Container, Row, Col } from "../elements/elements";
import Filters from "./../components/learning/Filters";
import SearchInfo from "../components/learning/SearchInfo";
import { rightAnswerArr } from "../functions/functions";

const Learning = props => {
  const userData = useSelector(state => state.userReducer);
  const { cqi, perPage } = props;

  let { allQuestions } = props;

  // filter array based on search result
  allQuestions = allQuestions.filter(item =>
    item.t.includes(props.search.toLowerCase())
  );

  // filter array based on filter that user choose
  // console.log("userData", userData);
  // allQuestions = allQuestions.slice(0, 1).filter(item => {
  //   console.log("item", item);
  //   console.log("userData", userData[`id_${item.id}`]);
  //   return true;
  // });

  let amount = allQuestions.length;

  return (
    <>
      {/* userData = {JSON.stringify(userData)} */}
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
