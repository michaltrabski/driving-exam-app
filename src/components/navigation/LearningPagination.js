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
  const [search, setSearch] = useState("");

  const handleSearchSubmit = e => {
    e.preventDefault();
    props.searchQuestions(search);
  };

  React.useEffect(() => {
    console.log("fired");
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
        <Col flex between>
          <Button>
            <FontAwesomeIcon icon={faArrowLeft} /> poprzednia strona
          </Button>
          <Button onClick={props.nextPage}>
            Następna strona <FontAwesomeIcon icon={faArrowRight} />
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
