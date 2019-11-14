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
    <>
      {/* <div>
        <form onSubmit={handleSubmit} className="form-inline">
          <input
            className={`form-control mb-1 ${search === "" ||
              "bg-success text-light"}`}
            style={{ width: "calc(100% - 115px)" }}
            type="text"
            id="search"
            onChange={e => dispatch(searchQuestions(e.target.value))}
            value={search}
            placeholder="Szukaj pytania..."
          />
          <button
            className={`btn mb-1 ml-1 ${
              search === "" ? "btn-light" : "btn-danger"
            }`}
            type="text"
            onClick={e => dispatch(searchQuestions(""))}
          >
            X
          </button>
          <button className="btn btn-primary mb-1 ml-1" type="submit">
            Szukaj
          </button>
        </form>
      </div> */}

      <div>
        <form onSubmit={handleSubmit} className="form-inline">
          <input
            className={`form-control mb-1 ${search === "" ||
              "bg-success text-light"}`}
            style={{
              width: `${search === "" ? "100%" : "calc(100% - 120px)"}`
            }}
            type="text"
            id="search"
            onChange={e => dispatch(searchQuestions(e.target.value))}
            value={search}
            placeholder="Szukaj pytania..."
          />
          {search !== "" && (
            <>
              <button
                className={`btn mb-1 ml-1 ${
                  search === "" ? "btn-light" : "btn-danger"
                }`}
                type="text"
                onClick={e => dispatch(searchQuestions(""))}
              >
                X
              </button>
              <button className="btn btn-primary mb-1 ml-1" type="submit">
                Szukaj
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchForm;
