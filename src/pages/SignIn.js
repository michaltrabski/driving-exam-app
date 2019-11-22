import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import { path } from "./../config/path";
import { Link } from "react-router-dom";
import firebase from "./../config/firebase";

const SignIn = props => {
  const [cred, setCred] = useState({ email: "", password: "" });

  const handleChange = e => {
    // console.log(e.target.value);
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

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

    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     // dispatch({ type: "SIGNOUT_SUCCESS" });
    //   });
  };
  return (
    <Container>
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
              Nie masz konta? <Link to={path.sign_up}>Darmowa rejestracja</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
