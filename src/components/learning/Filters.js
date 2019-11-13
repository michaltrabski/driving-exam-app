import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterOption } from "./../../store/actions/questionsActions";

const Filters = () => {
  const filterOptions = useSelector(
    state => state.questionsReducer.filterOptions
  );
  const filterOption = useSelector(
    state => state.questionsReducer.filterOption
  );
  const dispatch = useDispatch();
  return (
    <form>
      <select
        value={filterOption}
        onChange={e => dispatch(changeFilterOption(e.target.value))}
        className={`form-control mb-1 mr-1 ${filterOption === "SHOW_ALL" ||
          "bg-success text-light"}`}
        type="select"
      >
        {filterOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Filters;
