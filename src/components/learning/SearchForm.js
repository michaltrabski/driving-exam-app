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
    <Row>
      <Col>
        {search !== "" && width < 768 && (
          <p>
            <SearchInfo amount={props.amount} />
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            onChange={e => dispatch(searchQuestions(e.target.value))}
            value={search}
            onFocus={e => e.target.select()}
            placeholder="wyszukaj..."
          />
          <button type="submit">Szukaj</button>
          <button type="text" onClick={e => dispatch(searchQuestions(""))}>
            X
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default SearchForm;
