import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "../elements/elements";
import { signOut } from "./../store/actions/usersActions";

const UserProfile = props => {
  const { isLoggedIn, userData } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row center>
        <Col>
          Witaj:{" "}
          {isLoggedIn === "yes"
            ? userData.email
            : isLoggedIn === "no"
            ? "Nie jesteś zalogowany"
            : "Sprawdzam czy jesteś zalogowany?"}
        </Col>
      </Row>
      {isLoggedIn === "yes" && (
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
  );
};

export default UserProfile;
