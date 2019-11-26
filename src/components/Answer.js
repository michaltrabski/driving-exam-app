import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { saveAnswer } from "./../store/actions/questionsActions";
import styled from "styled-components";
import { examSaveAnswer } from "../store/actions/examActions";

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
  const { mode } = props;
  const { showAnswerNow } = useSelector(state => state.settingsReducer);
  const [color, setColor] = useState(colors);

  const dispatch = useDispatch();

  useEffect(() => {
    let newColors = showAnswerNow
      ? { ...colors, [props.r]: "success" }
      : colors;
    setColor(newColors);
  }, [showAnswerNow, qIndex]);

  const handleAnswer = userAns => {
    mode !== "exam"
      ? userAns === props.r
        ? setColor({ ...color, [userAns]: "success" })
        : setColor({
            ...color,
            [props.r]: "success",
            [userAns]: "danger"
          })
      : setColor({ ...colors, [userAns]: "secondary" });

    if (mode === "exam") dispatch(examSaveAnswer(props.id, userAns));
    props.saveAnswer(props.id, userAns);
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

// const mapStateToProps = state => {
//   return {
//     settings: state.settingsReducer
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    saveAnswer: (question_id, userAns) => {
      dispatch(saveAnswer(question_id, userAns));
    }
  };
};
export default connect(null, mapDispatchToProps)(Answer);
