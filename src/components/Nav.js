import React from "react";
import { NavLink, Link } from "react-router-dom";
import { path } from "../config/path";
import { useSelector, useDispatch } from "react-redux";
import { yes } from "./../store/reducers/usersReducer";
import { toogleCollapse } from "./../store/actions/settingsActions";

const Nav = () => {
  const { collapse } = useSelector(state => state.settingsReducer);
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);

  const dispatch = useDispatch();

  return (
    <nav className="shadow navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        poznajTesty.pl{" "}
        <span
          className={`${
            poznajTestyHasAccess === yes ? "text-success" : "text-primary"
          } font-weight-bolder`}
        >
          App
        </span>
      </Link>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => dispatch(toogleCollapse())}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className={`navbar-collapse ${collapse && "collapse"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto mr-auto">
          <MyLink to="learn" label="Nauka pytań" />
          <MyLink to="difficult" label="Trudne pytania" />
          <MyLink to="exam" label="Wykonaj egzamin" />
          <MyLink to="exam_reviev" label="Wyniki egzaminów" />
          <MyLink to="stats" label="Statystyki" />
          <MyLink to="pricing" label="Cennik" />
          <MyLink to="courses" label="Szkolenia wideo" />
        </ul>
        <ul className="navbar-nav">
          {isLoggedIn === yes ? (
            <MyLink to="user_profile" label="Twój profil" green />
          ) : (
            <>
              <MyLink to="sign_up" label="Rejestracja" />
              <MyLink to="sign_in" label="Logowanie" />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const MyLink = ({ to, label, green, video, children }) => {
  const {
    isLoggedIn,
    userData: { poznajTestyHasAccess }
  } = useSelector(state => state.usersReducer);

  const color = () => {
    let color = "";
    if (poznajTestyHasAccess === yes && green) color = "text-success";
    if (isLoggedIn === yes && poznajTestyHasAccess !== yes && green)
      color = "text-primary";
    return color;
  };

  return (
    <li className={`nav-item ${video ? "video" : ""}`}>
      <NavLink className={`nav-link ${color()}`} to={path[to]}>
        {label}
      </NavLink>
      {children}
    </li>
  );
};

// const MyLinkOut = ({ to, label }) => {
//   return (
//     <li className="nav-item">
//       <a className="nav-link" href={to}>
//         {label}
//       </a>
//     </li>
//   );
// };

export default Nav;
