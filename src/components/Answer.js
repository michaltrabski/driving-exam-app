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
  const [color, setcolor] = useState(colors);
  const { showAnswerNow } = props.settings;

  useEffect(() => {
    let newColors = showAnswerNow
      ? { ...colors, [props.r]: "success" }
      : colors;
    setcolor(newColors);
  }, [showAnswerNow]);

  const handleAnswer = userAns => {
    if (userAns === props.r) {
      setcolor({ ...color, [userAns]: "success" });
    } else {
      setcolor({
        ...color,
        [props.r]: "success",
        [userAns]: "danger"
      });
    }
    // console.log("sssss", props.id, userAns, poznajTestyHasAccess);
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

const mapStateToProps = state => {
  return {
    settings: state.settingsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveAnswer: (question_id, userAns) => {
      dispatch(saveAnswer(question_id, userAns));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
