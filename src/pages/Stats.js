import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStatistics } from "../functions/functions";
import { Container, Row, Col } from "../elements/elements";
import { path } from "./../config/path";
import { getQuestions } from "../store/actions/questionsActions";
import { checking } from "./../store/reducers/usersReducer";
import {
  SHOW_ALL,
  SHOW_GOOD,
  SHOW_BAD,
  SHOW_WITHOUT
} from "./../functions/functions";
import { changeFilterOption } from "./../store/actions/questionsActions";

const Stats = props => {
  let { allQuestions, kat, lang, filterOption } = useSelector(
    state => state.questionsReducer
  );
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1", isLoggedIn, allQuestions.length, filterOption);
    if (
      isLoggedIn !== checking &&
      allQuestions.length === 0 &&
      filterOption === SHOW_ALL
    ) {
      console.log("2", isLoggedIn, allQuestions.length, filterOption);
      dispatch(getQuestions(kat, lang, poznajTestyHasAccess));
    }
  }, [kat, lang, isLoggedIn]);

  const handleClick = filter => {
    dispatch(changeFilterOption(filter));
    props.history.push(path.learn);
  };

  const [good, bad, all, rest] = getStatistics(allQuestions);
  console.log(good, bad, all, rest);

  let good_width = Math.floor((good / (good + bad)) * 100);
  good_width = isNaN(good_width) ? 0 : good_width;
  let bad_width = 100 - good_width;
  bad_width = isNaN(bad_width) ? 0 : bad_width;
  bad_width = bad_width === 100 && bad + good === 0 ? 0 : bad_width;

  return (
    <Container>
      <Row mb>
        <Col>
          <h1>Twoje statystyki:</h1>
          <p>
            Udzieliłeś odpowiedzi na <strong>{good + bad}</strong> pytania.
          </p>
        </Col>
      </Row>
      <Row mb>
        <Col>
          <button
            className="btn btn-success btn-sm mr-3"
            onClick={() => handleClick(SHOW_GOOD)}
            disabled={good === 0 ? true : false}
          >
            {good === 0 ? "0 pytań" : `Zobacz ${good} pytań`}
          </button>
          <span>
            Dobrze odpowiedziałeś na <strong>{good}</strong> pytań.
          </span>
        </Col>
      </Row>
      <Row mb>
        <Col>
          <button
            className="btn btn-danger btn-sm mr-3"
            onClick={() => handleClick(SHOW_BAD)}
            disabled={bad === 0 ? true : false}
          >
            {bad === 0 ? "0 pytań" : `Zobacz ${bad} pytań`}
          </button>
          <span>
            Źle odpowiedziałeś na <strong>{bad}</strong> pytań.
          </span>
        </Col>
      </Row>
      <Row mb>
        <Col>
          {good + bad > 0 && (
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${good_width}%` }}
                aria-valuenow={good_width}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {good_width}% dobrych odpowiedzi
              </div>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: `${bad_width}%` }}
                aria-valuenow={bad_width}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {bad_width}% złych odpowiedzi
              </div>
            </div>
          )}
        </Col>
      </Row>
      <br />
      <Row mb>
        <Col>
          <button
            className="btn btn-primary btn-sm mr-3"
            onClick={() => handleClick(SHOW_ALL)}
          >
            Zobacz wszystkie {all} pytania
          </button>
          <span>
            Oficjalnych pytań kategorii {kat.toUpperCase()} jest {all}
          </span>
        </Col>
      </Row>
      <Row mb>
        <Col>
          <button
            className="btn btn-secondary btn-sm mr-3"
            onClick={() => handleClick(SHOW_WITHOUT)}
          >
            Zobacz pozostałe {rest} pytań bez odpowiedzi
          </button>
          <span>
            Pytań, na które nie udzieliłeś żadnej odpowiedzi pozostało{" "}
            <strong>{rest}</strong> (z {all}).
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
