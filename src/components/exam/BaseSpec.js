import React from "react";
import { Row, Col } from "../../elements/elements";

const BaseSpec = ({ mobile }) => {
  return mobile ? (
    <div>
      <span>7/32</span>
    </div>
  ) : (
    <Row center className="d-none d-md-flex">
      <Col pr>
        <p>Pytania podstawowe</p>
        <p>1/20</p>
      </Col>
      <Col pl>
        <p>Pytania specialistyczne</p>
        <p>0/12</p>
      </Col>
    </Row>
  );
};

export default BaseSpec;
