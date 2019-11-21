import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "../elements/elements";
import { signOut } from "./../store/actions/usersActions";
import { yes, no } from "./../store/reducers/usersReducer";
import { Link } from "react-router-dom";
import { path } from "./../config/path";

const UserProfile = props => {
  const {
    isLoggedIn,
    userData: { email, poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  const freeAccount = (
    <span>
      Darmowe (<Link to={path.pricing}>wykup płatne konto</Link>,{" "}
      <Link to={path.pricing}>Cennik</Link>)
    </span>
  );

  const paidAccount = <span className="text-success">Płatne</span>;

  return (
    <Container>
      <Row mb center>
        <Col>
          Witaj:{" "}
          {isLoggedIn === yes
            ? email
            : isLoggedIn === no
            ? "Nie jesteś zalogowany"
            : "Sprawdzam czy jesteś zalogowany?"}
        </Col>
      </Row>

      {isLoggedIn === yes && (
        <>
          <Row mb>
            <Col>
              <h1>Twoje konto:</h1>
              <p>
                <strong>Rodzaj konta:</strong>{" "}
                {poznajTestyHasAccess === yes ? paidAccount : freeAccount}
              </p>
            </Col>
          </Row>
          <Row mb>
            <Col>
              <button
                className="btn btn-secondary"
                onClick={() => dispatch(signOut())}
              >
                Wyloguj się
              </button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default UserProfile;
