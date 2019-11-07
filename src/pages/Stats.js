import React from "react";
import { useSelector } from "react-redux";

const Stats = () => {
  const allQuestions = useSelector(
    state => state.questionsReducer.allQuestions
  );
  console.log(allQuestions);

  return (
    <div>
      <p>stats</p>
      <div>Wszystkie pytania = {allQuestions.length}</div>
    </div>
  );
};

export default Stats;
