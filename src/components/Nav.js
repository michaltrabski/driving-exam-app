import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { path, link_outside } from "../config/path";
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
        <span
          className={`${
            isLoggedIn ? "text-success" : "text-primary"
          } font-weight-bolder`}
        >
          App
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
          <NavLink
            className="nav-link"
            to={path.learn}
            onClick={handleNavLinkClick}
          >
            Nauka pytań
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.exam}
            onClick={handleNavLinkClick}
          >
            Wykonaj egzamin
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.exam_reviev}
            onClick={handleNavLinkClick}
          >
            Przeglądaj wyniki egzaminów
          </NavLink>
          <NavLink
            className="nav-link"
            to={path.exam}
            onClick={handleNavLinkClick}
          >
            Szkolenia wideo
          </NavLink>
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
              <button className="btn btn-outline-success" type="submit">
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
