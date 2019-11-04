import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  searchQuestions,
  NEXT_PAGE,
  PREVIES_PAGE
} from "../../store/actions/questionsActions";

const LearningPagination = props => {
  const [search, setSearch] = useState("");
  const [nr, setNr] = useState(props.cqi + 1);

  const handleSearchSubmit = e => {
    e.preventDefault();
    props.searchQuestions(search);
  };

  const handleGoToSubmit = e => {
    e.preventDefault();
    props.searchQuestions(search);
  };

  React.useEffect(() => {
    props.searchQuestions(search);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              id="search"
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">Szukaj</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleGoToSubmit}>
            <label htmlFor="gotonr">Idź do pytania nr: </label>
            <input
              id="gotonr"
              value={nr}
              type="number"
              onChange={e => setNr(e.target.value)}
            />
            <button variant="primary" type="submit">
              idź
            </button>
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
            {props.cqi} === {props.amount}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    perPage: state.questionsReducer.perPage,
    cqi: state.questionsReducer.cqi
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearningPagination);
