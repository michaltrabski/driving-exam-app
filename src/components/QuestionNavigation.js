import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { Button, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const QuestionNavigation = props => {
  return (
    <Container>
      <Row>
        <Col flex between>
          <Button
            disabled={props.prevQuestionsDisabled}
            onClick={props.prevQuestions}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Poprzednia strona
          </Button>
          <Button
            disabled={props.nextQuestionsDisabled}
            onClick={props.nextQuestions}
          >
            Następna strona <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
      {/* <Row>
        <p> x= {props.perPage}</p>
        <p> y = {props.current}</p>
        <p> z = {props.questionsAll.length}</p> */}
      {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
      {/* </Row> */}
    </Container>
  );
};

export default QuestionNavigation;
