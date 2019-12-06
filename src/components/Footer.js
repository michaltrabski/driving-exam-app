import React from "react";
import { getYear } from "../functions/functions";
import { StyledFooter, Container, Row, Col, H4, P } from "../elements/elements";
import { Link } from "react-router-dom";
import { path, coursesList } from "./../config/path";

const Footer = () => {
  return (
    <StyledFooter className="bg-dark text-light text-center p-1">
      <Container transparent mb_0 center>
        <Row>
          <Col mr>
            <H4>Szkolenia wideo:</H4>
            {coursesList.map(course => (
              <P>
                <Link to={`${path.blog}/${course.slug}`}>{course.title}</Link>
              </P>
            ))}
          </Col>
          <Col ml>
            <H4>Oferta:</H4>
            <P>
              <Link to={path.pricing}>PoznajTesty premium</Link>
            </P>
          </Col>
        </Row>
        <Row center>
          <Col>
            <span>Testy na prawo jazdy {getYear()}. </span>
            <Link to={path.terms}>Regulamin i polityka prywatności.</Link>{" "}
            <Link to={path.contact}>Kontakt.</Link>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
