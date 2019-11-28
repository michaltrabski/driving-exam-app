import React from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { examEnd, randomExam } from "../../store/actions/examActions";
import BaseSpec from "./BaseSpec";
import { reviev_mode, exam_mode } from "../../store/actions/settingsActions";
import Timer from "./Timer";
import { useHistory } from "react-router-dom";
import { path } from "./../../config/path";

const ExamInfo = () => {
  let history = useHistory();
  const { mode } = useSelector(state => state.settingsReducer);
  const { allQuestions, kat } = useSelector(state => state.questionsReducer);
  const { exam, qIndex } = useSelector(state => state.examReducer);
  const dispatch = useDispatch();

  const handleExamEnd = () => {
    dispatch(examEnd());
    history.push(path.exam_reviev);
  };

  return mode === reviev_mode ? null : (
    <Row mb>
      <Col flex between className="align-items-center">
        <BaseSpec mobile />
        <div className="d-none d-md-block">
          <span>Wartość punktowa </span>
          <span>{exam[qIndex].p}</span>
        </div>
        <div className="d-none d-md-block">
          <span>Kategoria </span>
          <span>{kat.toUpperCase()}</span>
        </div>
        <Timer />
        <button
          className="btn btn-secondary"
          onClick={
            mode === reviev_mode
              ? () => dispatch(randomExam(allQuestions))
              : () => handleExamEnd()
          }
        >
          {mode === reviev_mode ? "Rozpocznij nowy egzamin" : "Zakończ egzamin"}
        </button>
      </Col>
    </Row>
  );
};

export default ExamInfo;
