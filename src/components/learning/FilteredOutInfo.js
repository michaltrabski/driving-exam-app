import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_ALL } from "../../functions/functions";
import { changeFilterOption } from "./../../store/actions/questionsActions";

const FilteresOutInfo = ({ amount }) => {
  const { filterOption, filterOptions } = useSelector(
    state => state.questionsReducer
  );
  const dispatch = useDispatch();
  let filterName = filterOptions.find(item => item.value === filterOption);

  return filterOption !== SHOW_ALL && amount === 0 ? (
    <Container>
      <Row center>
        <Col>
          <h1>Posiadasz 0 pytań w Filtrze:</h1>
          <p>{filterName ? filterName.option : ""}</p>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(changeFilterOption(SHOW_ALL))}
          >
            usuń filtry
          </button>
        </Col>
      </Row>
    </Container>
  ) : (
    ""
  );
};

export default FilteresOutInfo;
