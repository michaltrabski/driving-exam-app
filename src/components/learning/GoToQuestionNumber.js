import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { goToQuestionNr } from "../../store/actions/questionsActions";

const GoToQuestionNumber = () => {
  const cqi = useSelector(state => state.questionsReducer.cqi);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={e => e.preventDefault()}>
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
    </Container>
  );
};

export default GoToQuestionNumber;
