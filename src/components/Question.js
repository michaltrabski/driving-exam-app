import React from "react";
import { Container, Row, Col, QuestionText } from "../elements/elements";
import Media from "./Media";

const Question = ({ question }) => {
  const { t, m, v } = question;

  return (
    <Container>
      <Row>
        <Col pr>
          <Media m={m} v={v} />
        </Col>
        <Col pl left>
          <h5>{t}</h5>

          {/* {Object.keys(question).map(key => (
            <p>{key + question[key]}</p>
          ))} */}
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
