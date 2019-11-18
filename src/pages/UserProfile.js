import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "../elements/elements";
import { Link } from "react-router-dom";
import path from "./../config/path";
import { signOut } from "./../store/actions/usersActions";

const UserProfile = () => {
  const user = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  if (!user.isLoggedIn)
    return (
      <Container transparent>
        <Row center>
          <Col>
            <h1>Jesteś niezalogowany!!!</h1>
            <Link className="navbar-brand" to={path.sign_in}>
              <button className="btn btn-primary">Logowanie</button>
            </Link>
            <Link className="navbar-brand" to={path.sign_up}>
              <button className="btn btn-primary">Rejestracja</button>
            </Link>
          </Col>
        </Row>
      </Container>
    );

  return (
    <Container>
      <Row center>
        <Col>Witaj {user.userData.email}</Col>
        {/* <Col> {JSON.stringify(user)}</Col> */}
      </Row>
      <Row center>
        <Col>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(signOut())}
          >
            Wyloguj się
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
