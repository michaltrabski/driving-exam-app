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
          <div className="d-flex mt-auto justify-content-end">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(examDisplayQuestionByIndex(qIndex + 1))}
            >
              Następne
            </button>
          </div>
        </Col>
      </Row>
      <Row mt>
        <Col>
          <Text>{t}</Text>
          <Answer {...question} mode="exam" />
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
