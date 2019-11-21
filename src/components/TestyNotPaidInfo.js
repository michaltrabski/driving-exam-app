import React from "react";
import { Link } from "react-router-dom";
import { path } from "./../config/path";

const TestyNotPaidInfo = () => {
  return (
    <div className="bg-light p-1 pt-3">
      <div className="alert alert-danger text-center m-0" role="alert">
        Darmowe konto NIE zapamiętuje Twoich wyników!!! Wykup konto:{" "}
        <Link to={path.pricing} className="alert-link">
          Cennik
        </Link>
      </div>
    </div>
  );
};

export default TestyNotPaidInfo;
