import React, { useState } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { examDisplayQuestionByIndex } from "./../../store/actions/examActions";
import QuestionExam from "./QuestionExam";

const ExamResult = props => {
  const [qIndex, setQindex] = useState(0);
  let { exam, maxScore, userScore } = props.exam;
  return (
    <>
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
                onClick={() => setQindex(i)}
              >
                {i + 1}
              </button>
            ))}
          </Col>
        </Row>
      </Container>
      <QuestionExam question={exam[qIndex]} showNow={props.showNow} />
    </>
  );
};

const getColor = (question, i) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";
  return color;
};

export default ExamResult;
