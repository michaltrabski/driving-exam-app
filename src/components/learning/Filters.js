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
        className="form-control mb-1 mr-1"
        type="select"
        style={filterOption !== "SHOW_ALL" ? { fontWeight: "bolder" } : {}}
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
    </form>
  );
};

export default Filters;
