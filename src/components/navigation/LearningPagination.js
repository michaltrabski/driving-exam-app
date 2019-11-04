import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import Resize from "../Resize";
import { connect } from "react-redux";
import { searchQuestions } from "../../store/actions/questionsActions";

const LearningPagination = (
  props,
  {
    perPage,
    currentQuestionIndex,
    allQuestions,
    previousPage,
    nextPage,
    exactQuestnionNr
  }
) => {
  const [nr, setNr] = useState(currentQuestionIndex + 1);
  let width = window.innerWidth;

  useEffect(() => {
    console.log("fired");
    setNr(currentQuestionIndex + 1);
  }, [currentQuestionIndex]);

  const handleSubmit = e => {
    e.preventDefault();
    exactQuestnionNr(nr);
  };
  const handleChange = e => {
    setNr(e.target.value);
  };

  console.log(props);
  const handleSearch = e => {
    console.log("searched");
    e.preventDefault();
    props.searchQuestions("string to search");
  };
  const goTo = (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Idź do pytania nr: </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control
          value={nr}
          type="number"
          className="d-inline w-auto mr-1"
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          idź
        </Button>
      </Form.Group>
    </Form>
  );
  return (
    <Container>
      {width <= 800 && (
        <Row>
          <Col>{goTo}</Col>
        </Row>
      )}

      <Row>
        <Col>
          <form onSubmit={handleSearch}>
            <input type="text" />
            <button type="submit">Szukaj</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col flex between>
          <div>
            <Button className="mr-1 mb-1" onClick={() => exactQuestnionNr(1)}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Button>
            <Button className="px-4 mb-1" onClick={previousPage}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
          </div>
          {width > 800 && goTo}
          <div>
            <Button className="px-4 mb-1" onClick={nextPage}>
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
            <Button
              className="ml-1 mb-1"
              onClick={() =>
                exactQuestnionNr(
                  Math.floor(allQuestions.length / perPage) * perPage + 1
                )
              }
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>
          </div>
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
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LearningPagination);
