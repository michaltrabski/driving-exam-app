import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const QuestionNavigation = props => {
  return (
    <Container>
      <Row>
        <Col flex between>
          <Button
            disabled={props.prevQuestionsDisabled}
            onClick={props.prevQuestions}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Poprzednia strona
          </Button>
          <Button
            disabled={props.nextQuestionsDisabled}
            onClick={props.nextQuestions}
          >
            Następna strona <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionNavigation;
