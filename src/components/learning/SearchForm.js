import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchQuestions } from "../../store/actions/questionsActions";

const SearchForm = props => {
  const search = useSelector(state => state.questionsReducer.search);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.getElementById("search").blur();
    dispatch(searchQuestions(search));
  };
  return (
    <form onSubmit={handleSubmit} className="form-inline position-relative">
      <input
        className="form-control mb-1 w-100"
        style={search !== "" ? { fontWeight: "bolder" } : {}}
        type="text"
        id="search"
        onChange={e => dispatch(searchQuestions(e.target.value))}
        value={search}
        placeholder="Szukaj pytania..."
      />
      <button
        className="btn btn-primary position-absolute"
        type="submit"
        style={
          search !== ""
            ? { left: "100%", transform: " translate(-100%)", top: "0px" }
            : { visibility: "hidden" }
        }
      >
        Szukaj
      </button>
    </form>
  );
};

export default SearchForm;
