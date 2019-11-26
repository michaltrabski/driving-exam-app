import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveAnswer } from "./../store/actions/questionsActions";
import styled from "styled-components";
import { examSaveAnswer } from "../store/actions/examActions";
import {
  learn_mode,
  exam_mode,
  reviev_mode
} from "../store/actions/settingsActions";

const colors = {
  t: "light",
  n: "light",
  a: "light",
  b: "light",
  c: "light"
};

const AnswersWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

const Answer = props => {
  const { ready, exam, qIndex } = useSelector(state => state.examReducer);
  const { showAnswerNow, mode } = useSelector(state => state.settingsReducer);
  const [color, setColor] = useState(colors);

  const dispatch = useDispatch();

  useEffect(() => {
    let newColors = colors;
    if (showAnswerNow && mode === learn_mode) {
      newColors = { ...colors, [props.r]: "success" };
    }

    if (mode === reviev_mode) {
      newColors = {
        ...colors,
        [props.userAns]: "danger", //set userAns to danger but if it is correct then it will be overwrite
        [props.r]: "success"
      };
    }

    setColor(newColors);
  }, [showAnswerNow, qIndex, mode]);

  const handleAnswer = userAns => {
    if (mode === learn_mode) {
      userAns === props.r
        ? setColor({ ...color, [userAns]: "success" })
        : setColor({
            ...color,
            [props.r]: "success",
            [userAns]: "danger"
          });
    }

    if (mode === exam_mode) {
      setColor({ ...colors, [userAns]: "secondary" });
      dispatch(examSaveAnswer(props.id, userAns));
    }

    dispatch(saveAnswer(props.id, userAns));
  };

  const yesNo = (
    <div>
      <button
        className={`btn btn-${color.t} mr-2`}
        onClick={() => handleAnswer("t")}
      >
        Tak
      </button>
      <button
        className={`btn btn-${color.n} ml-2`}
        onClick={() => handleAnswer("n")}
      >
        Nie
      </button>
    </div>
  );

  const abc = (
    <div>
      {["a", "b", "c"].map(item => (
        <button
          key={item}
          onClick={() => handleAnswer(item)}
          className={`btn btn-${color[item]} btn-block text-left`}
        >
          {item}) {props[item]}
        </button>
      ))}
    </div>
  );

  let ans = props.a !== "" ? abc : yesNo;

  return <AnswersWrapper>{ans}</AnswersWrapper>;
};

export default Answer;
