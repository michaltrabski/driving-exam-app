import React, { useState } from "react";
import { Container, Row, Col } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import firebase from "./../config/firebase";
import { SIGN_UP_ERR, SIGN_UP_SUCCESS } from "../store/actions/usersActions";
import { path } from "./../config/path";
import { Link } from "react-router-dom";
import { role, no } from "../store/reducers/usersReducer";
import { timeStamp } from "./../functions/functions";

const SignUp = props => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
    passwordRepeat: ""
  });

  const { signUpErr } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  const handleChange = e => {
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(cred.email, cred.password)
      .then(res => {
        firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            email: res.user.email,
            role: role.user,
            timeStamp: timeStamp(),
            poznajTestyHasAccess: no, // yes,no,checking
            kompendiumHasAccess: no, // yes,no,checking
            sytiniespHasAccess: no, // yes,no,checking
            pulapkiHasAccess: no, // yes,no,checking
            przepisyHasAccess: no // yes,no,checking
          });
      })
      .then(() => {
        dispatch({ type: SIGN_UP_SUCCESS });
        props.history.push(path.user_profile);
      })
      .catch(err => {
        dispatch({ type: SIGN_UP_ERR, err });
      });
  };

  return (
    <Container>
      <Row>
        <Col left>
          <div style={{ maxWidth: "300px" }}>
            <h5 className="grey-text text-darken-3">Darmowa rejestracja</h5>
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
              <div className="form-group">
                <label htmlFor="password">Powtórz hasło</label>
                <input
                  className="form-control"
                  type="password"
                  id="passwordRepeat"
                  onChange={handleChange}
                  value={cred.passwordRepeat}
                />
              </div>
              {signUpErr !== "" && (
                <p className="text-danger">{JSON.stringify(signUpErr)}</p>
              )}
              <button type="submit" className="btn btn-primary">
                Zarejestruj się
              </button>
            </form>
            <p className="mt-3">
              Masz już konto? <Link to={path.sign_in}>Zaloguj się</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
