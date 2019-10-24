import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { Button } from "react-bootstrap";

const QuestionNavigation = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button> -Poprzednia strona</Button>
          <Button>Następna strona -</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionNavigation;
