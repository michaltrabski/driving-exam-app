import React from "react";
import { Row, Col } from "../../../elements/elements";

const Actions = props => {
  return (
    <Row mtAuto>
      <Col left>
        <button
          size="sm"
          className="btn btn-light mr-1"
          onClick={() => props.setShowExplanation(!props.showExplanation)}
        >
          {props.showExplanation ? "ukryj wyjaśnienie" : "Wyjaśnienie"}
        </button>
      </Col>
    </Row>
  );
};

export default Actions;
