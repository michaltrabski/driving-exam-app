import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import path from "../config/path";
import { useSelector } from "react-redux";

const Nav = () => {
  const isLoggedIn = useSelector(state => state.usersReducer.isLoggedIn);
  const [collapse, setCollapse] = useState(true);
  const handleNavLinkClick = () => {
    setCollapse(true);
  };

  return (
    <nav className="shadow navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/" onClick={() => setCollapse(true)}>
        poznajTesty.pl{" "}
        <span className="text-primary font-weight-bolder">App</span>
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
          <NavLink
            className="nav-link"
            to={path.learn}
            onClick={handleNavLinkClick}
          >
            Pytania
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.exam}
            onClick={handleNavLinkClick}
          >
            Egzamin
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.exam}
            onClick={handleNavLinkClick}
          >
            Szkolenia wideo
          </NavLink>
          <NavLink
            className="nav-link ml-3 nav-link-video-course"
            to={path.exam}
            onClick={handleNavLinkClick}
          >
            Kompendium wiedzy
          </NavLink>
          <NavLink
            className="nav-link ml-3 nav-link-video-course"
            to={path.exam}
            onClick={handleNavLinkClick}
          >
            Sytuacje i Niespodzianki na drodze!
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.stats}
            onClick={handleNavLinkClick}
          >
            Statystyki
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.blog}
            onClick={handleNavLinkClick}
          >
            Blog
          </NavLink>
        </ul>
        <ul className="navbar-nav">
          {isLoggedIn ? (
            <NavLink
              className="nav-link"
              to={path.user_profile}
              onClick={handleNavLinkClick}
            >
              <button class="btn btn-outline-success" type="submit">
                Twój profil
              </button>
            </NavLink>
          ) : (
            <>
              <NavLink
                className="nav-link"
                to={path.sign_up}
                onClick={handleNavLinkClick}
              >
                Rejestracja
              </NavLink>
              <NavLink
                className="nav-link"
                to={path.sign_in}
                onClick={handleNavLinkClick}
              >
                Logowanie
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
