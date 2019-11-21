import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allGivenAnswerArr,
  rightAnswerArr,
  wrongAnswerArr
} from "../functions/functions";
import { Container, Row, Col } from "../elements/elements";
import { path } from "./../config/path";
import { getQuestions } from "../store/actions/questionsActions";
import { checking } from "./../store/reducers/usersReducer";

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

  const stat = allQuestions => {
    let good = 0;
    let bad = 0;

    allQuestions.forEach(item => {
      if (item.r === item.userAns) good++;
      if (item.r !== item.userAns && item.userAns !== false) bad++;
    });

    let all = allQuestions.length;
    let rest = all - good - bad;
    return [good, bad, all, rest];
  };

  let [good, bad, all, rest] = stat(allQuestions);
  // const handleGood = () => {
  //   console.log("set filter with goog questions and redirect to learn page");
  //   props.history.push(path.learn);
  // };

  // return (
  //   <Container>
  //     <Row center>
  //       <Col>w krótce</Col>
  //     </Row>
  //   </Container>
  // );

  return (
    <Container>
      <Row>
        <Col>
          <p>good = {good}</p>
          <p>bad = {bad}</p>
          <p>all = {all}</p>
          <p>rest = {rest}</p>

          {/* <p>stats</p>
          <div>Wszystkie pytania = {allQuestions.length}</div>
          <p>
            Mamy {allQuestions.length} pytań testowych na kategorię X w naszej
            bazie!
          </p>
          <p>
            Udzieliłeś odpowiedzi na <strong>{all}</strong> pytań testowych
            kategori X.
          </p> */}
        </Col>
      </Row>
      {/* <Row mb>
        <Col>
          <button className="btn btn-success mr-1" onClick={handleGood}>
            Zobacz pytania bez błędów
          </button>
          <span>
            <strong className="text-success">Udzieliłeś {good}</strong>{" "}
            prawidłowych opowiedzi!
          </span>
        </Col>
      </Row> */}
      {/* <Row mb>
        <Col>
          <button className="btn btn-danger mr-1">
            Zobacz pytania z błędami
          </button>
          <span>
            <strong className="text-danger">Udzieliłeś {bad}</strong>{" "}
            nieprawidłowych opowiedzi!
          </span>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Stats;
