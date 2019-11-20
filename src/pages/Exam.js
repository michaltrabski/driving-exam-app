import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector } from "react-redux";
import Question from "./../components/learning/Question";

const Exam = () => {
  let { allQuestions } = useSelector(state => state.questionsReducer);

  return (
    //   <>
    //     {allQuestions.slice(0, 1).map((question, i) => {
    //       return <Question question={question} />;
    //     })}
    //   </>
    // );
    <Container>
      <Row center>
        <Col>w krótce</Col>
      </Row>
    </Container>
  );
};

export default Exam;
