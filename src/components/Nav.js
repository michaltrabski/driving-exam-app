import React from "react";
import { NavLink, Link } from "react-router-dom";
import { path } from "../data/GlobalData";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Link className="navbar-brand" to="/">
        poznajTesty.pl{" "}
        <span className="text-primary font-weight-bolder">App</span>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav ml-auto mr-auto">
          <NavLink className="nav-link" to={path.learn}>
            Nauka Pytań
          </NavLink>
          <NavLink className="nav-link" to={path.exam}>
            Wykonaj Egzamin
          </NavLink>
          <NavLink className="nav-link" to={path.exam_reviev}>
            Przeglądaj wyniki egzaminów
          </NavLink>
          <NavLink className="nav-link" to={path.blog}>
            Blog
          </NavLink>
          <NavLink className="nav-link" to={path.stats}>
            Statystyki
          </NavLink>
        </ul>
        <ul className="navbar-nav">
          <NavLink className="nav-link" to={path.sign_up}>
            Rejestracja
          </NavLink>
          <NavLink className="nav-link" to={path.sign_in}>
            Logowanie
          </NavLink>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
