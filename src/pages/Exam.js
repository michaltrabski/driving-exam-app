import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import QuestionSingle from "./../components/learning/QuestionSingle";
import { GetQuestions } from "../functions/functionalComponents";
import { randomExam } from "./../store/actions/examActions";

const Exam = () => {
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const { exam } = useSelector(state => state.examReducer);

  const dispatch = useDispatch();

  // return (
  //   <Container>
  //     <Row center>
  //       <Col>w krótce</Col>
  //     </Row>
  //   </Container>
  // );
  return (
    <>
      <GetQuestions />

      <Container>
        <Row center>
          <Col>
            <button onClick={() => dispatch(randomExam(allQuestions))}>
              Rozpocznij egzamin
            </button>
          </Col>
        </Row>
      </Container>

      {JSON.stringify(exam)}
    </>
  );
};

const getColor = (question, i, cnr) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";

  return color;
};

export default Exam;
