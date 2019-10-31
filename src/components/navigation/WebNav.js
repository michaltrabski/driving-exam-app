import React from "react";
import { NavLink, Link } from "react-router-dom";
import { path } from "../../data/GlobalData";
import { Navbar, Nav } from "react-bootstrap";

const WebNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Link className="navbar-brand" to="/">
        poznajTesty.pl
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
        </Nav>
        <Nav>
          <NavLink className="nav-link" to={path.sign_up}>
            Rejestracja
          </NavLink>
          <NavLink className="nav-link" to={path.sign_in}>
            Logowanie
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default WebNav;
