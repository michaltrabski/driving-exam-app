import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { nextPage, previesPage } from "./../../store/actions/questionsActions";

const NextPage = props => {
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    props.nextPage();
  };
  const handlepreviesPage = () => {
    window.scrollTo(0, 0);
    props.previesPage();
  };
  return (
    <Container>
      <Row>
        <Col flex between>
          <Button
            variant={props.cqi === 0 ? "light" : "primary"}
            disabled={props.cqi === 0 ? true : false}
            onClick={handlepreviesPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> poprzednia strona
          </Button>
          {/* {props.amount} */}
          <Button
            variant={
              props.cqi + props.perPage >= props.amount ? "light" : "primary"
            }
            disabled={props.cqi + props.perPage >= props.amount ? true : false}
            onClick={handleNextPage}
          >
            Następna strona <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
    </Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPage);
