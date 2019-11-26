import React from "react";
import { useDispatch } from "react-redux";
import { examDisplayQuestionByIndex } from "../../store/actions/examActions";
import { useSelector } from "react-redux";
import { Row, Col } from "../../elements/elements";
import { exam_mode } from "../../store/actions/settingsActions";

const ButtonNext = ({ mobile }) => {
  const { mode } = useSelector(state => state.settingsReducer);
  const { qIndex } = useSelector(state => state.examReducer);
  const dispatch = useDispatch();

  if (mode !== exam_mode) return null;

  return mobile ? (
    <Row mt className="d-md-none">
      <Col>
        <button
          className="btn btn-primary btn-block"
          onClick={() => dispatch(examDisplayQuestionByIndex(qIndex + 1))}
        >
          Następne
        </button>
      </Col>
    </Row>
  ) : (
    <Row mt className="d-none d-md-flex">
      <Col className="d-flex justify-content-end">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => dispatch(examDisplayQuestionByIndex(qIndex + 1))}
        >
          Następne
        </button>
      </Col>
    </Row>
  );
};

export default ButtonNext;
