import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { saveAnswer } from "./../store/actions/userActions";

const Answer = props => {
  const [colors, setColors] = useState({
    t: "light",
    n: "light",
    a: "light",
    b: "light",
    c: "light"
  });

  useEffect(() => {
    if (props.settings.showAnswerNow) {
      setColors({
        ...colors,
        [props.r]: "success"
      });
    }
  }, []);

  const handleAnswer = user_answer => {
    if (user_answer === props.r) {
      setColors({ ...colors, [user_answer]: "success" });
    } else {
      setColors({
        ...colors,
        [props.r]: "success",
        [user_answer]: "danger"
      });
    }
    props.saveAnswer(props.id, user_answer);
  };

  const yesNo = (
    <div>
      <Button onClick={() => handleAnswer("t")} variant={colors.t}>
        Tak
      </Button>
      <Button onClick={() => handleAnswer("n")} variant={colors.n}>
        Nie
      </Button>
      {props.settings.showAnswerNow ? "tak" : "nie"}
    </div>
  );

  const abc = (
    <div>
      {["a", "b", "c"].map(item => (
        <Button
          key={item}
          onClick={() => handleAnswer(item)}
          className="text-left"
          variant={colors[item]}
          block
        >
          {item}) {props[item]}
        </Button>
      ))}
    </div>
  );

  return props.a !== "" ? abc : yesNo;
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
