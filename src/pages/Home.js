import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { Link } from "react-router-dom";
import path from "../config/path";
import { useSelector } from "react-redux";

const Home = () => {
  const katList = useSelector(state => state.questionsReducer.katList);
  const getYear = () => {
    let d = new Date();
    return d.getFullYear();
  };
  return (
    <Container transparent>
      <Row>
        <Col>
          <h1>Testy na prawo jazdy {getYear()}</h1>
          <p>
            Wszystkie kategorie prawa jazdy{" "}
            {katList.map(kat => {
              return `${kat.toUpperCase()}, `;
            })}
          </p>
          <Link className="navbar-brand" to={path.learn}>
            <button className="btn btn-primary">Baza pytań</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
