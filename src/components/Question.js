import React from "react";
import { Container, Row, Col } from "../elements/elements";
import Media from "./Media";
import styled from "styled-components";
import Answer from "./Answer";

const QuestionTest = styled.h5`
  margin: 0;
  padding: 0;
`;

const Question = ({ question, question: { t, m, v } }) => {
  return (
    <Container>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left>
          <QuestionTest>{t}</QuestionTest>
          <Answer {...question} />
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
