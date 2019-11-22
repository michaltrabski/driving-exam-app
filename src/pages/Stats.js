import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStatistics } from "../functions/functions";
import { Container, Row, Col } from "../elements/elements";
import { path } from "./../config/path";
import { getQuestions } from "../store/actions/questionsActions";
import { checking } from "./../store/reducers/usersReducer";
import { SHOW_GOOD, SHOW_BAD, SHOW_WITHOUT } from "./../functions/functions";
import { changeFilterOption } from "./../store/actions/questionsActions";

const Stats = props => {
  let { allQuestions, kat, lang } = useSelector(
    state => state.questionsReducer
  );
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn !== checking && allQuestions.length === 0) {
      dispatch(getQuestions(kat, lang, poznajTestyHasAccess));
    }
  }, [kat, lang, isLoggedIn]);

  const handleClick = filter => {
    dispatch(changeFilterOption(filter));
    props.history.push(path.learn);
  };

  const [good, bad, all, rest] = getStatistics(allQuestions);

  return (
    <Container>
      <Row mb>
        <Col>
          <h1>Twoje statystyki:</h1>
          <p>
            Oficjalnych pytań kategorii {kat.toUpperCase()} jest {all}
          </p>
          <p>Udzieliłeś odpowiedzi na {good + bad} pytań.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <button
              className="btn btn-success btn-sm mr-3"
              onClick={() => handleClick(SHOW_GOOD)}
            >
              Zobacz pytania
            </button>
            <span>Dobrze odpowiedziałeś na {good} pytań.</span>
          </p>
        </Col>
        <Col>
          <p>
            {" "}
            <button
              className="btn btn-danger btn-sm mr-3"
              onClick={() => handleClick(SHOW_BAD)}
            >
              Zobacz pytania
            </button>
            Źle odpowiedziałeś na {bad} pytań.
          </p>
        </Col>
      </Row>

      <Row mb>
        <Col>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </Col>
      </Row>
      <Row mb>
        <Col>
          <p>
            {" "}
            <button
              className="btn btn-secondary btn-sm mr-3"
              onClick={() => handleClick(SHOW_WITHOUT)}
            >
              Zobacz pytania
            </button>
            Pytań, na które nie udzieliłeś odpowiedzi pozostało {rest}.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
