import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import QuestionSingle from "./../components/learning/QuestionSingle";
import { GetQuestions } from "../functions/functionalComponents";
import {
  randomExam,
  examDisplayQuestionByIndex
} from "./../store/actions/examActions";

const Exam = () => {
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const { ready, exam, qIndex } = useSelector(state => state.examReducer);

  const dispatch = useDispatch();

  useEffect(() => {});

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
            {JSON.stringify(allQuestions.length)}
            <button onClick={() => dispatch(randomExam(allQuestions))}>
              Rozpocznij egzamin
            </button>
          </Col>
        </Row>
        <Row center>
          <Col>{ready ? "exam ready true" : "exam ready false"}</Col>
        </Row>
      </Container>

      <Container>
        <Row center>
          <Col>
            {ready &&
              exam.map((question, i) => (
                <button
                  className={`btn mr-1 mb-1 btn-${getColor(question, i)}`}
                  onClick={() => dispatch(examDisplayQuestionByIndex(i))}
                >
                  {i + 1}
                </button>
              ))}
          </Col>
        </Row>
      </Container>

      {ready &&
        exam
          .slice(qIndex, qIndex + 1)
          .map(question => <QuestionSingle question={question} />)}

      {JSON.stringify(exam)}
    </>
  );
};

const getColor = (question, i) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";

  return color;
};

export default Exam;
