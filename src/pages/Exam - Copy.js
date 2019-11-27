import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import QuestionExam from "../components/exam/QuestionExam";
import { GetQuestions } from "../functions/functionalComponents";
import { reviev_mode } from "./../store/actions/settingsActions";
import {
  randomExam,
  examDisplayQuestionByIndex
} from "./../store/actions/examActions";

const Exam = () => {
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const { ready, exam, qIndex, maxScore, userScore } = useSelector(
    state => state.examReducer
  );
  const { mode } = useSelector(state => state.settingsReducer);
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

      {ready && mode === reviev_mode && (
        <Container>
          <Row center>
            <Col>
              <h1>Egzamin zakończony</h1>
              {userScore > 0 ? (
                <h4 className="text-success">
                  Wynik pozytywny: {userScore}/{maxScore}pkt.
                </h4>
              ) : (
                <h4 className="text-danger">
                  Wynik negatywny: {userScore}/{maxScore}pkt.
                </h4>
              )}
              <p>Kliknij na numer pytania aby je zobaczyć:</p>
            </Col>
          </Row>
          <Row center>
            <Col>
              {exam.map((question, i) => (
                <button
                  className={`btn mr-1 mb-1 btn-${getColor(question, i)}`}
                  style={i === qIndex ? { border: "1px solid black" } : {}}
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
          .map(question => <QuestionExam question={question} />)}
    </>
  );
};

const getColor = (question, i) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";
  return color;
};

export default Exam;
