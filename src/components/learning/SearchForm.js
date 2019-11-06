import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { searchQuestions } from "../../store/actions/questionsActions";

const SearchForm = () => {
  const search = useSelector(state => state.questionsReducer.search);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              id="search"
              onChange={e => dispatch(searchQuestions(e.target.value))}
              value={search}
            />
            <button type="submit">Szukaj</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
