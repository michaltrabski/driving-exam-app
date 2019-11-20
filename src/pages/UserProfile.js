import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "../elements/elements";
import { Link } from "react-router-dom";
import { path } from "./../config/path";
import { signOut } from "./../store/actions/usersActions";

const UserProfile = props => {
  const user = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  const obj1 = { x: 1, y: 2 };
  const obj2 = { x: 1, y: "y" };

  return (
    <>
      <Container>
        <Row center>
          <Col>{JSON.stringify(obj1)}</Col>
          <Col>{JSON.stringify(obj2)}</Col>
          <Col>{JSON.stringify(obj2)}</Col>
        </Row>
      </Container>
      <Container>
        <Row center>
          <Col>
            Witaj:{" "}
            {user.userData.email
              ? user.userData.email
              : "Nie jesteś zalogowany"}
          </Col>
        </Row>
        {user.isLoggedIn && (
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
        )}
      </Container>
    </>
  );
};

export default UserProfile;
