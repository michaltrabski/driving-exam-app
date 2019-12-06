import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import { path } from "./../config/path";
import { Link } from "react-router-dom";
import firebase from "./../config/firebase";

const SignIn = props => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [change, setchange] = useState(false);
  const [emailToChange, setEmailToChange] = useState("");
  const [info, setInfo] = useState("");

  const handleChange = e => {
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handleEmailToChange = e => {
    setEmailToChange(e.target.value);
  };

  const changeText = "Zmiana lub odzyskiwanie hasła";

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then(() => {
        console.log("zalogowano");
        props.history.push(path.user_profile);
        // dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log("NIE zalogowano", err);
        // dispatch({ type: "LOGIN_ERROR", err });
      });
  };

  const handleReset = e => {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(emailToChange)
      .then(() => {
        setInfo(
          "Wysłałem do Ciebie email z linkiem do zmiany hasła. Sprawdź pocztę email lub folder spam!"
        );
      })
      .catch(err => {
        setInfo(JSON.stringify(err));
      });
  };

  return (
    <Container>
      {!change ? (
        <Row>
          <Col left>
            <div style={{ maxWidth: "300px" }}>
              <h5 className="grey-text text-darken-3">Logowanie</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    value={cred.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Hasło</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={cred.password}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Zaloguj się
                </button>

                {/* {this.props.authError} */}
              </form>
              <p className="mt-3">
                Nie masz konta?{" "}
                <Link to={path.sign_up}>Darmowa rejestracja</Link>
              </p>
              <p
                className="mt-3 text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setchange(true)}
              >
                {changeText}
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col left>
            <div style={{ maxWidth: "300px" }}>
              <h5 className="grey-text text-darken-3">{changeText}</h5>
              <form onSubmit={handleReset}>
                <div className="form-group">
                  <label htmlFor="email">
                    Podaj email, którego hasło chcesz zmienić
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email_to_change"
                    onChange={handleEmailToChange}
                    value={emailToChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Zmień hasło
                </button>

                <div>{info}</div>
              </form>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SignIn;
