import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul style={{ listStyleType: "none", textAlign: "center" }}>
      <li style={{ display: "inline" }}>
        <NavLink to="/">Home </NavLink>
      </li>
      <li style={{ display: "inline" }}>
        <NavLink to="/learn">Nauka Pytań </NavLink>
      </li>
      <li style={{ display: "inline" }}>
        <NavLink to="/exam">Wykonaj Egzamin </NavLink>
      </li>
      <li style={{ display: "inline" }}>
        <NavLink to="/exam-reviev">Przeglądaj wyniki egzaminów</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
