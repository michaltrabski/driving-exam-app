import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
const firebase = require("firebase");

const SignIn = () => {
  const [cred, setCred] = useState({ email: "", password: "" });

  const handleChange = e => {
    // console.log(e.target.value);
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(cred);

    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then(() => {
        console.log("zalogowano");
        // dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log("NIE zalogowano", err);
        // dispatch({ type: "LOGIN_ERROR", err });
      });
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
                <label htmlFor="password">Password</label>
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
