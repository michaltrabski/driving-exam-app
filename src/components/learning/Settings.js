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
    console.log(e, kat);
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
      <Row mb center>
        <Col>
          <h1>Ustawienia:</h1>
        </Col>
      </Row>

      <Row mb>
        <Col>
          <form>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="njgkrefd"
                onChange={() => props.toogleShowAnswerNow()}
                checked={props.settings.showAnswerNow}
              />
              <label className="custom-control-label" htmlFor="njgkrefd">
                Pokazuj odpowiedzi od razu
              </label>
            </div>
          </form>
        </Col>
      </Row>

      <GoToQuestionNumber />

      <Row mb>
        <Col>
          <form className="form-inline">
            <select
              id="perpage"
              value={props.perPage}
              className="form-control d-inline w-auto mr-1"
              onChange={e => handleChangePerPage(e)}
            >
              {props.perPageOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <label htmlFor="perpage">Pytań na stronie</label>
          </form>
        </Col>
      </Row>

      <Row mb>
        <Col>
          <form className="form-inline">
            <label htmlFor="changekat">Zmień kategorię prawa jazdy</label>
            <select
              id="changekat"
              value={props.kat}
              className="form-control d-inline w-auto mr-1"
              onChange={e => handleChangeKategory(e, e.target.value)}
            >
              {props.katList.map(kat => (
                <option key={kat} value={kat}>
                  {kat.toUpperCase()}
                </option>
              ))}
            </select>
          </form>
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
