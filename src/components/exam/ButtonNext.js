import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  examDisplayQuestionByIndex,
  examEnd
} from "../../store/actions/examActions";
import { useHistory } from "react-router-dom";
import { Row, Col } from "../../elements/elements";
import { exam_mode } from "../../store/actions/settingsActions";
import { path } from "./../../config/path";

const ButtonNext = ({ mobile }) => {
  let history = useHistory();
  const { mode } = useSelector(state => state.settingsReducer);
  const { qIndex } = useSelector(state => state.examReducer);
  const dispatch = useDispatch();

  const handleExamEnd = () => {
    dispatch(examEnd());
    history.push(path.exam_reviev);
  };

  if (mode !== exam_mode) return null;

  return (
    <Row mt className={mobile ? "d-md-none" : "d-none d-md-flex"}>
      <Col className="d-flex justify-content-end">
        <button
          className={`btn btn-primary ${mobile ? "btn-block" : ""}`}
          onClick={
            qIndex >= 31
              ? () => handleExamEnd()
              : () => dispatch(examDisplayQuestionByIndex(qIndex + 1))
          }
        >
          {qIndex >= 31 ? "Zakończ egzamin" : "Następne"}
        </button>
      </Col>
    </Row>
  );
};

export default ButtonNext;
