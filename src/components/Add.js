import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { getYear } from "../functions/functions";
import styled from "styled-components";

const add1 = (
  <div>
    <p>Szkolenie wideo:</p>
    <p>
      Poznaj <strong>kompendium wiedzy</strong> , czyli wszystko co musisz
      wiedzieć przed egzaminem państwowym na prawo jazdy w {getYear()} roku!
    </p>
    <a
      href="https://poznaj-testy.pl/filmy/kompendium-wiedzy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Oglądaj film na moim blogu
    </a>
  </div>
);

const add2 = (
  <div>
    <p>
      Sytuacje i niespodzianki na drodze w {getYear()}roku, przez które oblejesz
      egzamin na prawo jazdy!
    </p>
    <a
      href="https://poznaj-testy.pl/filmy/sytuacje-i-niespodzianki/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Zobacz fil wideo!
    </a>
  </div>
);

const Add = () => {
  const adds = [add1, add2];
  const index = Math.floor(Math.random() * adds.length);

  return (
    <Container transparent>
      <Row>
        <Col>{adds[index]}</Col>
      </Row>
    </Container>
  );
};

export default Add;
