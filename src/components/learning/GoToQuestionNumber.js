import React, { useState } from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { goToQuestionNr } from "../../store/actions/questionsActions";
import { useLocation, useHistory } from "react-router-dom";
import { path } from "./../../config/path";

const GoToQuestionNumber = props => {
  const max = useSelector(state => state.questionsReducer.allQuestions.length);
  let [nr, setNr] = useState("");
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();
  // console.log(props, pathname);
  const handleSubmit = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.getElementById("gtqnr").blur();

    if (nr === "" || nr < 1) nr = 1;
    if (nr > max) nr = max;
    dispatch(goToQuestionNr(nr));
    setNr("");

    if (pathname !== path.learn) history.push(path.learn);
  };

  return (
    <Row mb>
      <Col>
        <form onSubmit={handleSubmit} className="form-inline">
          <label htmlFor="gtqnr">Idź do pytania nr: </label>
          <input
            className="form-control mb-1 ml-1"
            style={{ width: "100px" }}
            id="gtqnr"
            value={nr}
            type="number"
            onChange={e => setNr(e.target.value)}
            placeholder={1}
          />
          <button
            className="btn btn-primary form-control mb-1 ml-1"
            style={{ width: "auto" }}
            variant="primary"
            type="submit"
          >
            idź
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default GoToQuestionNumber;
