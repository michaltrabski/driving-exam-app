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
              label="Czy pokazywać odpowiedzi od razu?"
              onChange={() => props.toogleShowAnswerNow()}
              checked={props.settings.showAnswerNow}
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col left>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control
              value={props.perPageDefault}
              as="select"
              className="d-inline w-auto mr-1"
              onChange={() => console.log("changed")}
            >
              {props.perPageOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Form.Control>
            <Form.Label>Ile pytań pokazywać na jednej stronie?</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col left>
          <p>Zmień kategorię prawa jazdy</p>
          <div>
            {props.katList.map(kat => (
              <Button
                key={kat}
                variant={kat === props.kat ? "success" : "light"}
                onClick={() => props.changeKategory(kat)}
                className="mr-3"
              >
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
    katList: state.questionsReducer.katList,
    kat: state.questionsReducer.kat,
    perPageOptions: state.questionsReducer.perPageOptions,
    perPageDefault: state.questionsReducer.perPageDefault
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