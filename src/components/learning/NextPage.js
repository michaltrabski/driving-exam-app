import React from "react";
import { Row, Col } from "../../elements/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { nextPage, previesPage } from "./../../store/actions/questionsActions";
import Resize from "./../Resize";

const NextPage = ({ cqi, perPage, amount, nextPage, previesPage }) => {
  const pages = Number.isInteger(amount / perPage)
    ? Math.floor(amount / perPage)
    : Math.floor(amount / perPage) + 1;
  const page = Math.floor(cqi / perPage) + 1;

  const handleNextPage = () => {
    perPage !== 1 && window.scrollTo(0, 0);
    nextPage();
  };
  const handlepreviesPage = () => {
    perPage !== 1 && window.scrollTo(0, 0);
    previesPage();
  };
  const width = Resize();

  return (
    <Row>
      <Col flex between>
        <button
          className={`btn btn-${cqi === 0 ? "light" : "primary"}`}
          disabled={cqi === 0 ? true : false}
          onClick={handlepreviesPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          {width > 700 && <span> poprzednia strona</span>}
        </button>
        <div>
          {page} z {pages} stron, {amount} pytań.
        </div>
        <button
          className={`btn btn-${cqi + perPage >= amount ? "light" : "primary"}`}
          disabled={cqi + perPage >= amount ? true : false}
          onClick={handleNextPage}
        >
          {width > 700 && <span>Następna strona </span>}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    perPage: state.questionsReducer.perPage,
    cqi: state.questionsReducer.cqi
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextPage: () => {
      dispatch(nextPage());
    },
    previesPage: () => {
      dispatch(previesPage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextPage);
