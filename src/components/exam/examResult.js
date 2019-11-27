import React, { useState } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { examDisplayQuestionByIndex } from "./../../store/actions/examActions";
import QuestionExam from "./QuestionExam";

const ExamResult = props => {
  const [show, setShow] = useState(props.show);
  const [qIndex, setQindex] = useState(0);
  let { exam, maxScore, userScore } = props.exam;

  const handleClick = i => {
    setShow(true);
    setQindex(i);
  };
  return (
    <>
      <Container>
        <Row mb>
          <Col>
            <h1>Egzamin nr {props.examNr} zakończony</h1>
            {userScore >= 68 ? (
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
        <Row mb>
          <Col>
            {exam.map((question, i) => (
              <button
                className={`btn mr-1 mb-1 btn-${getColor(question, i)}`}
                style={
                  i === qIndex && show ? { border: "1px solid black" } : {}
                }
                onClick={() => handleClick(i)}
              >
                {i + 1}
              </button>
            ))}
          </Col>
        </Row>

        {show && (
          <Row mb>
            <Col>
              <QuestionExam question={exam[qIndex]} showNow={props.showNow} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

const getColor = (question, i) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";
  return color;
};

export default ExamResult;
