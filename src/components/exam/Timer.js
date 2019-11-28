import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { examTimerChange, examEnd } from "./../../store/actions/examActions";
import { useHistory } from "react-router-dom";
import { path } from "./../../config/path";

const Timer = () => {
  let history = useHistory();
  const { time, ended } = useSelector(state => state.examReducer);
  const dispatch = useDispatch();

  const handleExamEnd = () => {
    dispatch(examEnd());
    history.push(path.exam_reviev);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!ended) dispatch(examTimerChange(time - 1));
      if (time <= 0) handleExamEnd();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const formatTime = () => {
    let m = Math.floor(time / 60);
    let s = time - m * 60;
    return s > 9 ? `${m}:${s}` : `${m}:0${s}`;
  };

  return (
    <div>
      <span>{formatTime()}</span>
    </div>
  );
};

export default Timer;
