import React, { useState } from "react";
import { Container, Row, Col } from "../../elements/elements";
import Media from "../Media";
import styled from "styled-components";
import Answer from "../Answer";
import Explanation from "../Explanation";
import { useSelector, useDispatch } from "react-redux";
import { examDisplayQuestionByIndex } from "../../store/actions/examActions";

const QuestionSingle = ({
  question,
  question: { id, t, m, v, nr, p, r, userAns }
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const { ready, exam, qIndex } = useSelector(state => state.examReducer);
  const { kat } = useSelector(state => state.questionsReducer);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Info>
          <strong>{nr}</strong> kat. {kat.toUpperCase()}, pkt {p}
        </Info>
      </Row>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl flex column>
          <Row center>
            <Col pr>
              <p>Pytania podstawowe</p>
              <p>1/20</p>
            </Col>
            <Col pl>
              <p>Pytania specialistyczne</p>
              <p>0/12</p>
            </Col>
          </Row>

          <Row className="mt-auto d-none d-md-flex">
            <Col>
              <div
                className="progress position-relative"
                style={{ height: "1.5rem" }}
              >
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `20%` }}
                  aria-valuenow="20%"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div className="position-absolute w-100 h-100 text-center">
                  <span>14s</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row mt className="d-none d-md-flex">
            <Col className="d-flex justify-content-end">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => dispatch(examDisplayQuestionByIndex(qIndex + 1))}
              >
                Następne
              </button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row mt>
        <Col>
          <Text>{t}</Text>
          <Answer {...question} mode="exam" />
        </Col>
      </Row>
      <Row mt className="d-md-none">
        <Col>
          <button
            className="btn btn-primary btn-block"
            onClick={() => dispatch(examDisplayQuestionByIndex(qIndex + 1))}
          >
            Następne
          </button>
        </Col>
      </Row>
      {showExplanation && <Explanation {...question} />}
    </Container>
  );
};

const Text = styled.h5`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;

const Info = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

export default QuestionSingle;
