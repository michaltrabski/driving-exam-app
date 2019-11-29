import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, H1, H2 } from "../elements/elements";
import { path, coursesList } from "./../config/path";

const Courses = () => {
  return (
    <Container>
      <Row center>
        <Col>
          <H1>Szkolenia wideo</H1>
        </Col>
      </Row>
      {coursesList.map(course => (
        <Row key={course.id}>
          <Col>
            <H2>{course.title}</H2>
            <Link to={`${path.courses}/${course.slug}`}>{course.title}</Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Courses;
