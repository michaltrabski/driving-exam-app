import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { saveAnswer } from "./../store/actions/questionsActions";
import styled from "styled-components";

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
  const { mode, current } = props;
  const { showAnswerNow } = useSelector(state => state.settingsReducer);
  const [color, setColor] = useState(colors);

  useEffect(() => {
    console.log("xxxxxxxxxxxxxx");
    console.log(color);
    return () => {
      console.log("clean up", color);
    };
  });

  useEffect(() => {
    let newColors = showAnswerNow
      ? { ...colors, [props.r]: "success" }
      : colors;
    setColor(newColors);
  }, [showAnswerNow, current]);

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

  return (
    <AnswersWrapper>
      {typeof mode}
      {mode}
      <br />
      <br />
      {ans}
    </AnswersWrapper>
  );
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
