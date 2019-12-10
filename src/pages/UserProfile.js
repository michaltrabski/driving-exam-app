import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, H1, H2 } from "../elements/elements";
import { signOut } from "./../store/actions/usersActions";
import { yes, no } from "./../store/reducers/usersReducer";
import { Link } from "react-router-dom";
import { path, coursesList } from "./../config/path";
import { link } from "react-router-dom";
import AccessCode from "../components/AccessCode";

const UserProfile = props => {
  const {
    isLoggedIn,
    userData: { email, poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);
  const { userData } = useSelector(state => state.usersReducer);

  const dispatch = useDispatch();

  const freeAccount = (
    <span>
      Brak dostępu (<Link to={path.pricing}>wykup płatne konto</Link>,{" "}
      <Link to={path.pricing}>Cennik</Link>)
    </span>
  );

  const paidAccount = (
    <span className="text-success">Tak. Masz dostęp do płatnej wersji.</span>
  );

  return (
    <Container>
      <Row mb center>
        <Col>
          <H1>Twój profil:</H1>
          <span>
            Witaj:{" "}
            {isLoggedIn === yes
              ? email
              : isLoggedIn === no
              ? "Nie jesteś zalogowany"
              : "Sprawdzam czy jesteś zalogowany?"}
          </span>
        </Col>
      </Row>

      {isLoggedIn === yes && (
        <>
          <Row mb>
            <Col>
              <H2>Twoje kupione dostępy:</H2>
              <p>
                <strong>Dostęp do poznajTesty premium:</strong>{" "}
                {poznajTestyHasAccess === yes ? paidAccount : freeAccount}
              </p>
            </Col>
          </Row>

          <AccessCode />

          <Row mb>
            <Col>
              <H2>Dostępy do szkoleń wideo:</H2>
              {coursesList.map(course => (
                <div key={course.id}>
                  <strong>{course.title} </strong>
                  {userData[course.hasAccess] === no && (
                    <>
                      <span>Brak dostępu, </span>
                      <a href={course.offerLinkOutside}>
                        zobacz opis szkolenia
                      </a>
                    </>
                  )}
                  {userData[course.hasAccess] === yes && (
                    <>
                      <span className="text-success">
                        Masz opłacony dostęp.{" "}
                      </span>
                      <Link to={course.slugToPaidContent}>
                        Oglądaj szkolenie tutaj.
                      </Link>
                    </>
                  )}
                </div>
              ))}
            </Col>
          </Row>
          <Row mb>
            <Col>
              <H2>Akcje:</H2>
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
