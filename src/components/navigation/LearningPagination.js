import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  searchQuestions,
  NEXT_PAGE,
  PREVIES_PAGE,
  GO_TO_QUESTION_NR
} from "../../store/actions/questionsActions";

const LearningPagination = props => {
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="gotonr">Idź do pytania nr: </label>
            <input
              id="gotonr"
              value={props.cqi + 1}
              type="number"
              onChange={e => props.goToQuestionNr(e.target.value)}
              onFocus={e => e.target.select()}
            />
            <button variant="primary" type="submit">
              idź
            </button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              id="search"
              onChange={e => props.searchQuestions(e.target.value)}
              value={props.search}
            />
            <button type="submit">Szukaj</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col flex between>
          <Button
            disabled={props.cqi === 0 ? true : false}
            onClick={props.previesPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> poprzednia strona
          </Button>
          {props.amount}
          <Button
            disabled={props.cqi + props.perPage >= props.amount ? true : false}
            onClick={props.nextPage}
          >
            Następna strona <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    perPage: state.questionsReducer.perPage,
    cqi: state.questionsReducer.cqi,
    search: state.questionsReducer.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchQuestions: search => {
      dispatch(searchQuestions(search));
    },
    nextPage: () => {
      dispatch({ type: NEXT_PAGE });
    },
    previesPage: () => {
      dispatch({ type: PREVIES_PAGE });
    },
    goToQuestionNr: nr => {
      dispatch({ type: GO_TO_QUESTION_NR, nr });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearningPagination);
