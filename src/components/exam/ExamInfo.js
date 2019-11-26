import React from "react";
import { Row, Col } from "../../elements/elements";
import { useDispatch } from "react-redux";
import { examEnd } from "../../store/actions/examActions";
import BaseSpec from "./BaseSpec";

const ExamInfo = () => {
  const dispatch = useDispatch();

  return (
    <Row mb>
      <Col flex between>
        <BaseSpec mobile />
        <button onClick={() => dispatch(examEnd())}>Zakończ egzamin</button>
      </Col>
    </Row>
  );
};

export default ExamInfo;
