import React from "react";

const SearchInfo = props => {
  return (
    <h1 className="text-center">
      Znaleziono <strong>{props.amount}</strong> pytania ze {props.max}
    </h1>
  );
};

export default SearchInfo;
