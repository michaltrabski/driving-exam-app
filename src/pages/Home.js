import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { Link } from "react-router-dom";
import path from "../config/path";
import { getYear } from "../functions/functions";

const Home = () => {
  return (
    <Container transparent>
      <Row center>
        <Col>
          <h1>Testy na prawo jazdy {getYear()}</h1>
          <p>
            Wszystkie kategorie prawa jazdy <br />
            <span>A, A1, A2, AM, B, B1, C, C1, D, D1, T, PT</span>
          </p>
          <Link to={path.learn}>
            <button className="btn btn-primary">Baza pytań</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
