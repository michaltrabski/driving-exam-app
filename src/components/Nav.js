import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { path, link_outside } from "../config/path";
import { useSelector } from "react-redux";

const Nav = () => {
  const { isLoggedIn } = useSelector(state => state.usersReducer);
  const { poznajTestyHasAccess } = useSelector(
    state => state.usersReducer.userData
  );
  const user = useSelector(state => state.usersReducer);
  const [collapse, setCollapse] = useState(true);
  const handleNavLinkClick = () => {
    setCollapse(true);
  };

  return (
    <>
      {/* {JSON.stringify(user)} */}
      <nav className="shadow navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" onClick={() => setCollapse(true)}>
          poznajTesty.pl{" "}
          <span
            className={`${
              isLoggedIn === "yes" ? "text-success" : "text-primary"
            } font-weight-bolder`}
          >
            App
          </span>
          <span>
            {" "}
            - {poznajTestyHasAccess ? "płatne konto" : "darmowe konto"}
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapse(!collapse)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${collapse && "collapse"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.learn}
                onClick={handleNavLinkClick}
              >
                Nauka pytań
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.exam}
                onClick={handleNavLinkClick}
              >
                Wykonaj egzamin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.pricing}
                onClick={handleNavLinkClick}
              >
                Cennik
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.exam_reviev}
                onClick={handleNavLinkClick}
              >
                Przeglądaj wyniki egzaminów
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.exam}
                onClick={handleNavLinkClick}
              >
                Szkolenia wideo
              </NavLink>
            </li>
            <a
              className="nav-link ml-3 nav-link-video-course"
              href={link_outside.kompendium_wiedzy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kompendium wiedzy
            </a>
            <a
              className="nav-link ml-3 nav-link-video-course"
              href={link_outside.syt_i_niesp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sytuacje i Niespodzianki na drodze!
            </a>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.stats}
                onClick={handleNavLinkClick}
              >
                Statystyki
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={path.blog}
                onClick={handleNavLinkClick}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            {isLoggedIn === "yes" ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link text-success"
                  to={path.user_profile}
                  onClick={handleNavLinkClick}
                >
                  Twój profil
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={path.sign_up}
                    onClick={handleNavLinkClick}
                  >
                    Rejestracja
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={path.sign_in}
                    onClick={handleNavLinkClick}
                  >
                    Logowanie
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
