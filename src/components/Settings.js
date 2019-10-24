import React from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "../elements/elements";
import { connect } from "react-redux";
import { toogleShowAnswerNow } from "./../store/actions/settingsActions";

const Settings = props => {
  return (
    <Container>
      <Row>
        <Col left>
          <Form>
            <Form.Check
              className="mb-3 success"
              custom
              type="checkbox"
              id="njgkrefd"
              label="Pokazuj odpowiedzi od razu"
              onChange={() => props.toogleShowAnswerNow()}
              checked={props.settings.showAnswerNow}
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col left>Kategorie tematyczne</Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settingsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toogleShowAnswerNow: () => {
      dispatch(toogleShowAnswerNow());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
