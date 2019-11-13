import React from "react";
import { Row, Col } from "../../elements/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { nextPage, previesPage } from "./../../store/actions/questionsActions";
import Resize from "./../Resize";

const NextPage = props => {
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    props.nextPage();
  };
  const handlepreviesPage = () => {
    window.scrollTo(0, 0);
    props.previesPage();
  };
  const width = Resize();

  return (
    <Row>
      <Col flex between>
        <button
          className={`btn btn-${props.cqi === 0 ? "light" : "primary"}`}
          disabled={props.cqi === 0 ? true : false}
          onClick={handlepreviesPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          {width > 700 && <span> poprzednia strona</span>}
        </button>
        <button
          className={`btn btn-${
            props.cqi + props.perPage >= props.amount ? "light" : "primary"
          }`}
          disabled={props.cqi + props.perPage >= props.amount ? true : false}
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
