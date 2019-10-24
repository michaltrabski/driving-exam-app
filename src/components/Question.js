import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import Media from "./Media";
import styled from "styled-components";
import Answer from "./Answer";
import Explanation from "./Explanation";
import QuestionToDo from "./QuestionToDo";

const QuestionTest = styled.h5`
  margin: 0;
  padding: 0;
`;

const Question = ({ question, question: { t, m, v, nr } }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <Container>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left>
          <QuestionTest>
            {nr}) {t}
          </QuestionTest>
          <Answer {...question} setShowExplanation={setShowExplanation} />
          <QuestionToDo
            setShowExplanation={setShowExplanation}
            showExplanation={showExplanation}
          />
        </Col>
      </Row>
      {showExplanation && (
        <Row>
          <Col left>
            <Explanation />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Question;
