import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "../elements/elements";
import { Link } from "react-router-dom";
import { path } from "./../config/path";
import { signOut } from "./../store/actions/usersActions";

const UserProfile = props => {
  const user = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  console.log("xxx", user);

  if (user.isLoggedIn === "checking")
    return (
      <Container transparent>
        <Row center>
          <Col>
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  if (!user.isLoggedIn) props.history.push(path.sign_in);
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
