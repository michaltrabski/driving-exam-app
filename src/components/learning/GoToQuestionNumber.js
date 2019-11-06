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
      <Col left>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gtqnr">Idź do pytania nr: </label>
          <input
            id="gtqnr"
            value={cqi + 1}
            type="number"
            onChange={e => dispatch(goToQuestionNr(e.target.value))}
            onFocus={e => e.target.select()}
          />
          <button variant="primary" type="submit">
            idź
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default GoToQuestionNumber;
