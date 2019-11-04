import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  searchQuestions,
  NEXT_PAGE
} from "../../store/actions/questionsActions";

const LearningPagination = props => {
  return (
    <Container>
      <Row>
        <Col flex between>
          <Button className="px-4 mb-1">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>

          <Button className="px-4 mb-1" onClick={props.nextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// const mapStateToProps = state => {
//   return {
//     allQuestions: state.questionsReducer.allQuestions,
//     filteredQuestions: state.questionsReducer.filteredQuestions,
//     kat: state.questionsReducer.kat,
//     lang: state.questionsReducer.lang,
//     perPageDefault: state.questionsReducer.perPageDefault
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    searchQuestions: search => {
      dispatch(searchQuestions(search));
    },
    nextPage: () => {
      dispatch({ type: NEXT_PAGE });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LearningPagination);
