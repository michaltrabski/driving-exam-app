import React from "react";
import { useSelector } from "react-redux";

const SearchInfo = props => {
  const max = useSelector(state => state.questionsReducer.allQuestions.length);
  return (
    <>
      Znaleziono <strong>{props.amount}</strong> pytania ze {max}
    </>
  );
};

export default SearchInfo;
