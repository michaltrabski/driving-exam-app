import React from "react";
import { Container, Row, Col } from "../../elements/elements";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { NEXT_PAGE, PREVIES_PAGE } from "../../store/actions/questionsActions";

const NextPage = props => {
  return (
    <Container>
      <Row>
        <Col flex between>
          <Button
            disabled={props.cqi === 0 ? true : false}
            onClick={props.previesPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> poprzednia strona
          </Button>
          {props.amount}
          <Button
            disabled={props.cqi + props.perPage >= props.amount ? true : false}
            onClick={props.nextPage}
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
      dispatch({ type: NEXT_PAGE });
    },
    previesPage: () => {
      dispatch({ type: PREVIES_PAGE });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextPage);
