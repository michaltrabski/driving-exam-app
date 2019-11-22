import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchQuestions } from "../../store/actions/questionsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = props => {
  const { search } = useSelector(state => state.questionsReducer);
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
        className="form-control w-100"
        style={search !== "" ? { fontWeight: "bolder" } : {}}
        type="text"
        id="search"
        onChange={e => dispatch(searchQuestions(e.target.value))}
        value={search}
        placeholder="Szukaj pytania..."
      />
      <input
        className="btn btn-danger position-absolute"
        type="button"
        value="&times;"
        style={
          search !== ""
            ? {
                left: "calc(100% + -75px)",
                transform: " translate(-100%)",
                top: "0px"
              }
            : { visibility: "hidden" }
        }
        onClick={() => dispatch(searchQuestions(""))}
      />
      <span
        className="position-absolute text-secondary"
        style={{ right: "0", transform: "translateX(-100%)" }}
        onClick={() => document.getElementById("search").focus()}
      >
        <FontAwesomeIcon icon={faSearch} />
      </span>
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
