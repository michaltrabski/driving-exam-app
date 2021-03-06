import React, { useState } from "react";
import { Container, Row, Col, P } from "../elements/elements";
import { useSelector, useDispatch } from "react-redux";
import firebase from "./../config/firebase";
import { SIGN_UP_ERR, SIGN_UP_SUCCESS } from "../store/actions/usersActions";
import { path } from "./../config/path";
import { Link } from "react-router-dom";
import { role, no } from "../store/reducers/usersReducer";
import { timeStamp } from "./../functions/functions";
import {
  poznajTestyHasAccess,
  kompendium_wiedzy,
  sytuacje_i_niespodzianki,
  pulapki_egzaminacyjne
} from "./../store/reducers/usersReducer";

const SignUp = props => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
    passwordRepeat: ""
  });
  const [checked, setChecked] = useState(false);
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
            [poznajTestyHasAccess]: no,
            [kompendium_wiedzy]: no,
            [sytuacje_i_niespodzianki]: no,
            [pulapki_egzaminacyjne]: no
          });
        return res.user.uid;
      })
      .then(uid => {
        dispatch({ type: SIGN_UP_SUCCESS, uid });
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
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label className="form-check-label" for="exampleCheck1">
                  Akceptuję regulamin.
                </label>
              </div>
              {signUpErr !== "" && (
                <p className="text-danger">{JSON.stringify(signUpErr)}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!checked}
              >
                Zarejestruj się
              </button>
            </form>
            <p className="mt-3">
              Masz już konto? <Link to={path.sign_in}>Zaloguj się</Link>
            </p>
            <P>
              <Link to={path.terms}>Regulamin i polityka prywatności.</Link>
            </P>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
