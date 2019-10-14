import React from "react";
import { Container, Row, Col } from "../elements/elements";
import Media from "./Media";

const Question = ({ question }) => {
  const { t, m } = question;

  return (
    <Container>
      <Row>
        <Col>
          <Media m={m} />
        </Col>
        <Col>{t}</Col>
      </Row>
    </Container>
  );
};

export default Question;
