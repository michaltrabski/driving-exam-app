import React from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "../../../elements/elements";

const Actions = props => {
  return (
    <Row mtAuto>
      <Col left>
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

export default Actions;
