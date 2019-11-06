import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons"; //"@fortawesome/free-regular-svg-icons" "@fortawesome/free-solid-svg-icons"
import { Row, Col } from "../elements/elements";

const QuestionActions = props => {
  return (
    <Row mtAuto>
      <Col left>
        <Button variant="light" size="sm" className="mr-1">
          <FontAwesomeIcon icon={faThumbsDown} />
        </Button>
        <Button variant="light" size="sm" className="mr-1">
          <FontAwesomeIcon icon={faThumbsUp} />
        </Button>
        <Button
          variant="light"
          size="sm"
          className="mr-1"
          onClick={() => props.setShowExplanation(!props.showExplanation)}
        >
          {props.showExplanation ? "ukryj wyjaśnienie" : "Wyjaśnienie"}
        </Button>
      </Col>
    </Row>
  );
};

export default QuestionActions;
