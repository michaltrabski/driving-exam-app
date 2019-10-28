import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "./../elements/elements";

const QuestionToDo = props => {
  return (
    <Row mtAuto>
      <Col left>
        <Button varian="primary">
          <FontAwesomeIcon
            icon={faQuestion}
            onClick={() => props.setShowExplanation(!props.showExplanation)}
          />
        </Button>
      </Col>
    </Row>
  );
};

export default QuestionToDo;
