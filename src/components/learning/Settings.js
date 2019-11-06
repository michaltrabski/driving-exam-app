import React from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "../../elements/elements";
import { connect } from "react-redux";
import { toogleShowAnswerNow } from "../../store/actions/settingsActions";
import {
  changeKategory,
  changePerPage
} from "../../store/actions/questionsActions";
import GoToQuestionNumber from "./GoToQuestionNumber";

const Settings = props => {
  const handleChangeKategory = (e, kat) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    props.changeKategory(kat);
  };
  const handleChangePerPage = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
    props.changePerPage(e.target.value);
  };

  return (
    <Container transparent>
      <Row>
        <Col>
          <h1>Ustawienia:</h1>
        </Col>
      </Row>

      <Row>
        <Col>
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
      <GoToQuestionNumber />
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Ile pytań pokazywać na jednej stronie?</Form.Label>
              <Form.Control
                value={props.perPage}
                as="select"
                className="d-inline w-auto mr-1"
                onChange={e => handleChangePerPage(e)}
              >
                {props.perPageOptions.map(opt => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Zmień kategorię prawa jazdy</span>
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
)(Settings);
