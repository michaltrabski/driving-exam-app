import React from "react";
import { Link } from "react-router-dom";
import { path } from "./../config/path";

const AnswersForPaidAccountsInfo = () => {
  return (
    <div className="alert alert-danger text-center m-0" role="alert">
      Odpowiedzi z wyjaśnieniami dostępne są w poznajTesty premium:{" "}
      <Link to={path.pricing} className="alert-link">
        Cennik
      </Link>
    </div>
  );
};

export default AnswersForPaidAccountsInfo;
