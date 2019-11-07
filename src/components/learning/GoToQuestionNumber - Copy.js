import React from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { goToQuestionNr } from "../../store/actions/questionsActions";

const GoToQuestionNumber = () => {
  const cqi = useSelector(state => state.questionsReducer.cqi);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.getElementById("gtqnr").blur();
    dispatch(goToQuestionNr(cqi + 1));
  };

  return (
    <Row>
      <Col>
        <form onSubmit={handleSubmit} className="form-inline">
          <label htmlFor="gtqnr">Idź do pytania nr: </label>
          <input
            className="form-control mb-1 ml-1"
            style={{ width: "100px" }}
            id="gtqnr"
            value={cqi + 1}
            type="number"
            onChange={e => dispatch(goToQuestionNr(e.target.value))}
            // onFocus={e => e.target.select()}
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
