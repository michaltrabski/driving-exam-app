import React from "react";
import { Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { searchQuestions } from "../../store/actions/questionsActions";
import SearchInfo from "./SearchInfo";
import Resize from "./../Resize";

const SearchForm = props => {
  const search = useSelector(state => state.questionsReducer.search);
  const dispatch = useDispatch();
  const width = Resize();

  const handleSubmit = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.getElementById("search").blur();
    dispatch(searchQuestions(search));
  };
  return (
    <Row mb>
      <Col>
        <SearchInfo amount={props.amount} />

        <form
          onSubmit={handleSubmit}
          className="form-inline justify-content-center"
        >
          <input
            className="form-control mb-1 mr-1"
            style={{ maxWidth: "150px" }}
            type="text"
            id="search"
            onChange={e => dispatch(searchQuestions(e.target.value))}
            value={search}
            // onFocus={e => e.target.select()}
            placeholder="szukana fraza..."
          />
          <button className="btn btn-primary mb-1 mr-1" type="submit">
            Szukaj
          </button>
          <button
            className="btn btn-danger mb-1"
            type="text"
            onClick={e => dispatch(searchQuestions(""))}
          >
            X
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default SearchForm;
