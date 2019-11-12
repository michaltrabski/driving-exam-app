import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "../elements/elements";
import { useSelector } from "react-redux";
const firebase = require("firebase");

const SignUp = () => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
    passwordRepeat: ""
  });

  const userData = useSelector(state => state.usersReducer.userData);

  const handleChange = e => {
    // console.log(e.target.value);
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("SignUp handleSubmit cred = ", cred);

    firebase
      .auth()
      .createUserWithEmailAndPassword(cred.email, cred.password)
      .then(res => {
        console.log("createUserWithEmailAndPassword = ", res);
        return firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            ...userData,
            email: res.user.email
          });
      })
      .then(() => {
        console.log("zalogowano");
        // dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log("NIE zalogowano", err);
        // dispatch({ type: "LOGIN_ERROR", err });
      });
  };

  // firebase
  // .auth()
  // .createUserWithEmailAndPassword(newUser.email, newUser.password)
  // .then(resp => {
  //   return firestore
  //     .collection("users")
  //     .doc(resp.user.uid)
  //     .set({
  //       firstName: newUser.firstName,
  //       lastName: newUser.lastName,
  //       initials: newUser.firstName[0] + newUser.lastName[0]
  //     });
  // })
  // .then(() => {
  //   dispatch({ type: "SIGNUP_SUCCESS" });
  // })
  // .catch(err => {
  //   dispatch({ type: "SIGNUP_ERROR", err });
  // });

  return (
    <Container>
      <Row>
        <Col left>
          <div style={{ maxWidth: "300px" }}>
            <h5 className="grey-text text-darken-3">Rejestracja</h5>
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
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="passwordRepeat"
                  onChange={handleChange}
                  value={cred.passwordRepeat}
                />
              </div>
              <Button type="submit" variant="primary">
                Zarejestruj się
              </Button>
              {/* {this.props.authError} */}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
