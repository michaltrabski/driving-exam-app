import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import path from "../config/path";

const Nav = () => {
  const [collapse, setCollapse] = useState(true);
  const handleNavLinkClick = () => {
    setCollapse(true);
  };

  return (
    <>
      <nav className="shadow navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
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
              Nauka Pytań
            </NavLink>
            <NavLink
              className="nav-link"
              to={path.exam}
              onClick={handleNavLinkClick}
            >
              Wykonaj Egzamin
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
              to={path.blog}
              onClick={handleNavLinkClick}
            >
              Blog
            </NavLink>
            <NavLink
              className="nav-link"
              to={path.stats}
              onClick={handleNavLinkClick}
            >
              Statystyki
            </NavLink>
          </ul>
          <ul className="navbar-nav">
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
