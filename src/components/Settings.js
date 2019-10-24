import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "../elements/elements";
import { connect } from "react-redux";
import { toogleShowAnswerNow } from "./../store/actions/settingsActions";
import { changeKategory } from "../store/actions/questionsActions";

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
        <Col>
          <p>Wybierz kategorię prawa jazdy</p>
          <div>
            {props.katList.map(kat => (
              <Button variant="light" onClick={() => props.changeKategory(kat)}>
                {kat}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settingsReducer,
    katList: state.questionsReducer.katList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toogleShowAnswerNow: () => {
      dispatch(toogleShowAnswerNow());
    },
    changeKategory: kat => {
      dispatch(changeKategory(kat));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
