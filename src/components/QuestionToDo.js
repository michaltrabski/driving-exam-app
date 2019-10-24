import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const QuestionToDo = props => {
  console.log("QuestionToDo");
  return (
    <>
      <Button varian="primary">
        <FontAwesomeIcon
          icon={faQuestion}
          onClick={() => props.setShowExplanation(!props.showExplanation)}
        />
      </Button>
      {props.showExplanation ? "tak" : "nie"}
    </>
  );
};

export default QuestionToDo;
