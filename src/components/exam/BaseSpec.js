import React from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector } from "react-redux";

const BaseSpec = ({ mobile }) => {
  const { qIndex } = useSelector(state => state.examReducer);

  return mobile ? (
    <div className="d-md-none">
      <span>{qIndex + 1}/32</span>
    </div>
  ) : (
    <Row center className="d-none d-md-flex">
      <Col pr>
        <p>Pytania podstawowe</p>
        <p>{qIndex >= 20 ? 20 : qIndex + 1}/20</p>
      </Col>
      <Col pl>
        <p>Pytania specialistyczne</p>
        <p>{qIndex >= 20 ? qIndex + 1 - 20 : 0}/12</p>
      </Col>
    </Row>
  );
};

export default BaseSpec;
