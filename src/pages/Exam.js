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

  return (
    <>
      <GetQuestions />

      {ready || (
        <Container>
          <Row center>
            <Col>
              {/* {JSON.stringify(allQuestions.length)} */}

              <button
                className="btn btn-primary btn-lg"
                onClick={() => dispatch(randomExam(allQuestions))}
                disabled={allQuestions.length === 0 ? true : false}
              >
                Rozpocznij egzamin
              </button>
            </Col>
          </Row>
        </Container>
      )}

      {ready && (
        <Container>
          <Row center>
            <Col>
              {exam.map((question, i) => (
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
      )}

      {ready &&
        exam
          .slice(qIndex, qIndex + 1)
          .map(question => <QuestionSingle question={question} />)}
    </>
  );
};

const getColor = (question, i) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";

  return color;
};

export default Exam;
