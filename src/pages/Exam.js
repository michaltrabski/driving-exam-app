import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector } from "react-redux";
import QuestionSingle from "./../components/learning/QuestionSingle";
import { GetQuestions } from "../functions/functionalComponents";

const Exam = () => {
  const { allQuestions } = useSelector(state => state.questionsReducer);
  const [current, setCurrent] = useState(0);
  const exam = allQuestions.slice(0, 32);

  return (
    <>
      <GetQuestions />
      <Container>
        <Row center>
          <Col>w krótce</Col>
        </Row>
      </Container>
      {1 === 2 && (
        <>
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
  color =
    question.r !== question.userAns && question.userAns !== ""
      ? "secondary"
      : color;
  color = i === current ? `outline-${color}` : color;
  return color;
};

export default Exam;
