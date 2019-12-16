import React from "react";
import { Container, Row, Col, H1, P } from "../elements/elements";
import { Link } from "react-router-dom";
import { path } from "../config/path";
import { getYear } from "../functions/functions";

const Home = () => {
  return (
    <Container transparent>
      <Row center>
        <Col>
          <H1>Testy na prawo jazdy {getYear()}</H1>
          <P>
            Wszystkie kategorie prawa jazdy <br />
            <span>A, A1, A2, AM, B, B1, C, C1, D, D1, T, PT</span>
          </P>
          <MyLink to="learn" label="Nauka pytań / Baza pytań" />
          <MyLink to="exam" label="Wykonaj egzamin" />
          <MyLink to="difficult" label="Zobacz trudne pytania" last />
        </Col>
      </Row>
    </Container>
  );
};

const MyLink = ({ to, label, success, last }) => {
  return (
    <>
      <Link to={path[to]}>
        <button className={`btn btn-${success ? "success" : "primary"}`}>
          {label}
        </button>
      </Link>
      {last || <p className="m-3">albo</p>}
    </>
  );
};
export default Home;
