import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logofn.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="Logo Pour Fond Sombre" />
      </div>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/mes-sites"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Mes sites</li>
        </NavLink>
        <NavLink
          to="/A-propos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À propos</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
