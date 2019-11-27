import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { examTimerChange, examEnd } from "./../../store/actions/examActions";

const Timer = () => {
  const { time, ended } = useSelector(state => state.examReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = setInterval(() => {
      if (!ended) dispatch(examTimerChange(time - 1));
      if (time <= 0) dispatch(examEnd());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div>
      <span>{time}</span>
    </div>
  );
};

export default Timer;
