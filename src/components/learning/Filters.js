import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterOption } from "./../../store/actions/questionsActions";
import { SHOW_ALL } from "../../functions/functions";

const Filters = () => {
  const { filterOption, filterOptions } = useSelector(
    state => state.questionsReducer
  );
  const dispatch = useDispatch();
  return (
    <form className="position-relative">
      <select
        value={filterOption}
        onChange={e => dispatch(changeFilterOption(e.target.value))}
        className="form-control mb-1 mr-1"
        type="select"
        style={filterOption !== SHOW_ALL ? { fontWeight: "bolder" } : {}}
      >
        {filterOptions.map(option => (
          <option
            key={option.value}
            value={option.value}
            style={
              filterOption === option.value ? { fontWeight: "bolder" } : {}
            }
          >
            {option.option}
          </option>
        ))}
      </select>
      <input
        className="btn btn-danger position-absolute"
        type="button"
        value="&times;"
        style={
          filterOption !== SHOW_ALL
            ? {
                right: "0",
                top: "0px"
              }
            : { visibility: "hidden" }
        }
        onClick={() => dispatch(changeFilterOption(SHOW_ALL))}
      />
    </form>
  );
};

export default Filters;
