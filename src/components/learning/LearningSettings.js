import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "../../elements/elements";
import { connect } from "react-redux";
import { toogleShowAnswerNow } from "../../store/actions/settingsActions";
import { changeKategory } from "../../store/actions/questionsActions";
import { changePerPage } from "../../store/actions/questionsActions";

const LearningSettings = props => {
  const handleChangeKategory = (e, kat) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    props.changeKategory(kat);
  };
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
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                value={props.perPage}
                as="select"
                className="d-inline w-auto mr-1"
                onChange={e => props.changePerPage(e.target.value)}
              >
                {props.perPageOptions.map(opt => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Form.Control>
              <Form.Label>Ile pytań pokazywać na jednej stronie?</Form.Label>
            </Form.Group>
          </Form>
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
                onClick={e => handleChangeKategory(e, kat)}
                className="mr-3"
              >
                {kat.toUpperCase()}
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
    perPage: state.questionsReducer.perPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toogleShowAnswerNow: () => {
      dispatch(toogleShowAnswerNow());
    },
    changeKategory: kat => {
      dispatch(changeKategory(kat));
    },
    changePerPage: perPage => {
      dispatch(changePerPage(perPage));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearningSettings);
