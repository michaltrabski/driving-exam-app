import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { getYear } from "../functions/functions";
import { link_outside } from "../config/path";

const add1 = (
  <div>
    <p>Szkolenie wideo:</p>
    <p>
      Poznaj <strong>kompendium wiedzy</strong> , czyli wszystko co musisz
      wiedzieć przed egzaminem państwowym na prawo jazdy w {getYear()} roku!
    </p>
    <a href={link_outside.kompendium_wiedzy}>Oglądaj film na moim blogu</a>
  </div>
);

const add2 = (
  <div>
    <p>Szkolenie wideo:</p>
    <p>
      Sytuacje i niespodzianki na drodze w {getYear()}roku, przez które oblejesz
      egzamin na prawo jazdy!
    </p>
    <a href={link_outside.sytuacje_i_niespodzianki}>Zobacz film wideo!</a>
  </div>
);

const Add = () => {
  const adds = [add1, add2];
  const index = Math.floor(Math.random() * adds.length);

  return (
    <Container>
      <Row center>
        <Col>{adds[index]}</Col>
      </Row>
    </Container>
  );
};

export default Add;
