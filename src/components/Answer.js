import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { saveAnswer } from "./../store/actions/userActions";

const Answer = props => {
  const [colors, setColors] = useState({
    tak: "danger"
  });

  const handleAnswer = user_answer => {
    console.log(props.r);
    props.saveAnswer(props.id, user_answer);
  };

  const yesNo = (
    <div>
      <Button onClick={() => handleAnswer("t")} variant={colors.tak}>
        Tak
      </Button>
      <Button onClick={() => handleAnswer("n")} variant={getButtonColor()}>
        Nie
      </Button>
    </div>
  );

  const abc = (
    <div>
      {["a", "b", "c"].map(item => (
        <Button
          onClick={() => handleAnswer(item)}
          className="text-left"
          variant={getButtonColor()}
          block
        >
          {item}) {props[item]}
        </Button>
      ))}
    </div>
  );

  return props.a !== "" ? abc : yesNo;
};

const getButtonColor = user_answer => {
  console.log(user_answer);
  return "light";
};
const mapDispatchToProps = dispatch => {
  return {
    saveAnswer: (question_id, user_answer) => {
      dispatch(saveAnswer(question_id, user_answer));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Answer);
