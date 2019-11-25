import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector } from "react-redux";
import QuestionSingle from "./../components/learning/QuestionSingle";

const Exam = () => {
  let { allQuestions } = useSelector(state => state.questionsReducer);

  return (
    <>
      <Container>
        <Row center>
          <Col>w krótce</Col>
        </Row>
      </Container>
      {allQuestions.slice(0, 1).map((question, i) => {
        return <QuestionSingle question={question} />;
      })}
    </>
  );
};

export default Exam;
