import React from "react";
import { useSelector } from "react-redux";
import {
  allGivenAnswerArr,
  rightAnswerArr,
  wrongAnswerArr
} from "../functions/functions";
import { Container, Row, Col } from "../elements/elements";
import { Button } from "react-bootstrap";
import path from "./../config/path";

const Stats = props => {
  const allQuestions = useSelector(
    state => state.questionsReducer.allQuestions
  );

  const all = allGivenAnswerArr(allQuestions, allQuestions).length;
  const good = rightAnswerArr(allQuestions, allQuestions).length;
  const bad = wrongAnswerArr(allQuestions, allQuestions).length;

  const handleGood = () => {
    console.log("set filter with goog questions and redirect to learn page");
    props.history.push(path.learn);
  };
  return (
    <Container>
      <Row>
        <Col>
          <p>stats</p>
          <div>Wszystkie pytania = {allQuestions.length}</div>
          <p>
            Mamy {allQuestions.length} pytań testowych na kategorię X w naszej
            bazie!
          </p>
          <p>
            Udzieliłeś odpowiedzi na <strong>{all}</strong> pytań testowych
            kategori X.
          </p>
        </Col>
      </Row>
      <Row mb>
        <Col>
          <Button variant="success" className="mr-1" onClick={handleGood}>
            Zobacz pytania bez błędów
          </Button>
          <span>
            <strong className="text-success">Udzieliłeś {good}</strong>{" "}
            prawidłowych opowiedzi!
          </span>
        </Col>
      </Row>
      <Row mb>
        <Col>
          <Button variant="danger" className="mr-1">
            Zobacz pytania z błędami
          </Button>
          <span>
            <strong className="text-danger">Udzieliłeś {bad}</strong>{" "}
            nieprawidłowych opowiedzi!
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
