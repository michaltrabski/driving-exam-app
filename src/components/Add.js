import React from "react";
import { Container, Row, Col, H2, Img } from "../elements/elements";
import { getYear } from "../functions/functions";
import { link_outside, add_img_link } from "../config/path";

const add1 = (
  <>
    <Col pr>
      <a href={link_outside.kompendium_wiedzy}>
        <Img src={add_img_link.kompendium_wiedzy_1} />
      </a>
    </Col>
    <Col pl center>
      <H2>
        Poznaj <strong>kompendium wiedzy</strong>, czyli wszystko co musisz
        wiedzieć przed egzaminem państwowym na prawo jazdy w {getYear()} roku!
      </H2>
      <a href={link_outside.kompendium_wiedzy}>Oglądaj film na moim blogu</a>
    </Col>
  </>
);

const add2 = (
  <>
    <Col pr>
      <a href={link_outside.sytuacje_i_niespodzianki}>
        <Img src={add_img_link.sytuacje_i_niespodzianki_1} />
      </a>
    </Col>
    <Col pl center>
      <H2>
        Sytuacje i niespodzianki na drodze {getYear()}, przez które oblejesz
        egzamin na prawo jazdy!
      </H2>
      <a href={link_outside.sytuacje_i_niespodzianki}>
        Oglądaj film na moim blogu
      </a>
    </Col>
  </>
);

const Add = () => {
  const adds = [add1, add2];
  const index = Math.floor(Math.random() * adds.length);

  return (
    <Container>
      <Row>{adds[index]}</Row>
    </Container>
  );
};

export default Add;
