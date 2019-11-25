import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector } from "react-redux";
import QuestionSingle from "./../components/learning/QuestionSingle";
import { GetQuestions } from "../functions/functionalComponents";
import { randomExam } from "../functions/functions";

const Exam = () => {
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const [current, setCurrent] = useState(0);
  const [exam, setExam] = useState([]);

  const handleStartExam = () => {
    setExam(randomExam(allQuestions));
  };

  return (
    <>
      <GetQuestions />
      <Container>
        <Row center>
          <Col>
            <button onClick={() => handleStartExam()}>
              Rozpocznij egzamin
            </button>
          </Col>
        </Row>
      </Container>
      {1 === 1 && (
        <>
          {JSON.stringify(exam[0])}

          <Container>
            <Row center>
              <Col>
                {exam.map((question, i) => {
                  return (
                    <button
                      className={`btn mr-1 mb-1 btn-${getColor(
                        question,
                        i,
                        current
                      )}`}
                    >
                      {i}
                    </button>
                  );
                })}
              </Col>
            </Row>
          </Container>
          {exam.length > 0 && (
            <QuestionSingle
              question={exam[current]}
              current={current}
              setCurrent={setCurrent}
            />
          )}
        </>
      )}
    </>
  );
};

const getColor = (question, i, current) => {
  let color = question.r === question.userAns ? "success" : "danger";
  if (question.userAns === "") color = "secondary";

  return color;
};

export default Exam;
