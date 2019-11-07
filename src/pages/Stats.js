import React from "react";
import { useSelector } from "react-redux";
import { rightAnswerArr } from "../functions/functions";

const Stats = () => {
  const allQuestions = useSelector(
    state => state.questionsReducer.allQuestions
  );
  const userData = useSelector(state => state.userReducer);
  const good = rightAnswerArr(allQuestions, userData).length;

  const allGivenAnswerArr = () => {
    let x = allQuestions.filter(item => {
      let result = false;
      if (typeof userData[`id_${item.id}`] !== "undefined") {
        result = true;
      }
      return result;
    });
    return x;
  };

  const wrongAnswerArr = () => {
    let x = allQuestions.filter(item => {
      let result = false;
      if (typeof userData[`id_${item.id}`] !== "undefined") {
        if (item.r !== userData[`id_${item.id}`].userAnswer) {
          result = true;
        }
      }
      return result;
    });
    return x;
  };
  return (
    <div>
      <p>stats</p>
      <div>userData = {JSON.stringify(userData)}</div>
      <div>Wszystkie pytania = {allQuestions.length}</div>
      <p>
        Mamy {allQuestions.length} pytań testowych na kategorię X w naszej
        bazie!
      </p>
      <p>
        Udzieliłeś odpowiedzi na <strong>{allGivenAnswerArr().length}</strong>{" "}
        pytań testowych kategori X.
      </p>
      <p>
        Udzieliłeś <strong className="text-success">{good}</strong> prawidłowych
        opowiedzi!
      </p>
      <p>
        Udzieliłeś{" "}
        <strong className="text-danger">{wrongAnswerArr().length}</strong>{" "}
        nieprawidłowych opowiedzi!
      </p>
    </div>
  );
};

export default Stats;
