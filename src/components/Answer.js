import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { saveAnswer } from "./../store/actions/userActions";
import styled from "styled-components";

const colors = {
  t: "secondary",
  n: "secondary",
  a: "secondary",
  b: "secondary",
  c: "secondary"
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

  const handleAnswer = user_answer => {
    if (user_answer === props.r) {
      setcolor({ ...color, [user_answer]: "success" });
    } else {
      setcolor({
        ...color,
        [props.r]: "success",
        [user_answer]: "danger"
      });
    }
    // props.setShowExplanation(true);
    props.saveAnswer(props.id, user_answer);
  };

  const yesNo = (
    <div>
      <Button
        className="mr-2"
        onClick={() => handleAnswer("t")}
        variant={color.t}
      >
        Tak
      </Button>
      <Button
        className="ml-2"
        onClick={() => handleAnswer("n")}
        variant={color.n}
      >
        Nie
      </Button>
    </div>
  );

  const abc = (
    <div>
      {["a", "b", "c"].map(item => (
        <Button
          key={item}
          onClick={() => handleAnswer(item)}
          className="text-left"
          variant={color[item]}
          block
        >
          {item}) {props[item]}
        </Button>
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
    saveAnswer: (question_id, user_answer) => {
      dispatch(saveAnswer(question_id, user_answer));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
