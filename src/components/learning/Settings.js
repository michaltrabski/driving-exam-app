import React from "react";
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
          <form className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="njgkrefd"
                onChange={() => props.toogleShowAnswerNow()}
                checked={props.settings.showAnswerNow}
              />
              <label className="custom-control-label" htmlFor="njgkrefd">
                Czy pokazywać odpowiedzi od razu?
              </label>
            </div>
          </form>
        </Col>
      </Row>
      <GoToQuestionNumber />
      <Row>
        <Col>
          <form className="form-inline">
            <label htmlFor="">Ile pytań pokazywać na jednej stronie?</label>
            <select
              value={props.perPage}
              className="d-inline w-auto mr-1"
              onChange={e => handleChangePerPage(e)}
            >
              {props.perPageOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Zmień kategorię prawa jazdy</span>
          {props.katList.map(kat => (
            <button
              key={kat}
              onClick={e => handleChangeKategory(e, kat)}
              className={`btn btn-${
                kat === props.kat ? "success" : "light"
              } mr-3`}
            >
              {kat.toUpperCase()}
            </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
