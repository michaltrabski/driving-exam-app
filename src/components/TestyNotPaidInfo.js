import React from "react";
import { Link } from "react-router-dom";
import { path } from "./../config/path";

const TestyNotPaidInfo = () => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      Darmowe konto NIE zapamiętuje Twoich wyników!!! Wykup konto:{" "}
      <Link to={path.pricing} className="alert-link">
        Cennik
      </Link>
    </div>
  );
};

export default TestyNotPaidInfo;
