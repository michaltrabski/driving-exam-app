import React from "react";
import { Container, Row, Col } from "../elements/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { getYear } from "./../functions/functions";
import { Link } from "react-router-dom";
import { path, link_outside } from "./../config/path";
import { useLocation } from "react-router-dom";

const Pricing = () => {
  const x = useLocation();
  console.log(x);
  // useEffect(() => {
  //   console.log("xxxxxxxxxx");
  // }, [pathname]);

  const common = (
    <>
      <T>Dostęp do wszystkich oficjalnych pytań testowych {getYear()}</T>
      <T>
        Wszystkie kategorie prawo jazdy: A, A1, A2, AM, B, B1, C, C1, D, D1, T,
        PT
      </T>
      <T>Darmowa aktualizacja bazy pytań!</T>
    </>
  );
  return (
    <Container>
      <Row center>
        <Col>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Cennik</h1>
            <p className="lead">
              Oficjalne i zawsze aktualne testy na prawo jazdy {getYear()}!!!
              <br />
              <span className="bg-warning">
                <strong>Pytania są identyczne</strong> jak te, które będą na
                egzaminie w WORD.
              </span>
            </p>
          </div>
        </Col>
      </Row>

      <Row center>
        <Col>
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Darmowe</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  0zł <small className="text-muted">/ na zawsze</small>
                </h1>
                <ul className="text-left list-unstyled mt-3 mb-4">
                  {common}
                  <N>Zaawansowane statystyki</N>
                  <N>
                    Zapamiętywanie Twoich odpowiedzi, błędnych pytań, możliwość
                    wykonywania powtórek.
                  </N>
                  <N>Wyjaśnienia pytań testowych pod każdym pytaniem</N>
                </ul>
                <Link
                  to={path.sign_up}
                  className="btn btn-lg btn-block btn-outline-primary"
                >
                  Darmowa rejestracja
                </Link>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Premium</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  20zł <small className="text-muted">/ 3 miesiące</small>
                </h1>
                <ul className="text-left list-unstyled mt-3 mb-4">
                  {common}
                  <T>Zaawansowane statystyki</T>
                  <T>
                    Zapamiętywanie Twoich odpowiedzi, błędnych pytań, możliwość
                    wykonywania powtórek.
                  </T>
                  <T>Wyjaśnienia pytań testowych pod każdym pytaniem</T>
                </ul>
                <a
                  href={link_outside.poznaj_testy_premium_3_miesiace}
                  className="btn btn-lg btn-block btn-primary"
                >
                  Kup teraz - 20zł brutto
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const T = props => {
  return (
    <li>
      <FontAwesomeIcon icon={faThumbsUp} className="text-success" />{" "}
      {props.children}
    </li>
  );
};

const N = props => {
  return (
    <li style={{ color: "#adb5bd" }}>
      <FontAwesomeIcon icon={faTimesCircle} /> {props.children}
    </li>
  );
};
// export default Pricing;
