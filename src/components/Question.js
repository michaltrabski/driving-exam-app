import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import Media from "./Media";
import styled from "styled-components";
import Answer from "./Answer";
import Explanation from "./Explanation";
import QuestionActions from "./QuestionActions";

const QuestionTest = styled.h5`
  margin: 0;
  padding: 0;
  margin-top: 10px;
  @media (${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }
`;
const QuestionInfo = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const Question = ({ question, question: { id, t, m, v, nr, s } }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <Container>
      <Row>
        <QuestionInfo>
          <strong>{nr}</strong> kat. B, pkt {s}
        </QuestionInfo>
      </Row>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left flex column>
          <QuestionTest>{t}</QuestionTest>
          <Answer {...question} />
          <QuestionActions
            setShowExplanation={setShowExplanation}
            showExplanation={showExplanation}
          />
        </Col>
      </Row>
      {showExplanation && <Explanation {...question} />}
    </Container>
  );
};

export default Question;
