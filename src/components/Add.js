import React from "react";
import { Container, Row, Col } from "../elements/elements";

const adds = [
  { title: "Poznaj kompendium wiedzy", desc: "opis", img: "img1" },
  { title: "Pułapki egzaminacyjne", desc: "opis", img: "img1" },
  {
    title: "Sytuacje i niespodzianki na drodze",
    desc: "opis",
    img: "img1"
  }
];
const Add = () => {
  const index = Math.floor(Math.random() * adds.length);
  const { title, desc, img } = adds[index];

  return (
    <Container transparent>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Add;
