import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logofn.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
        <div className="logo navbar-brand">
        <img src={logo} alt="Logo Pour Fond Sombre" />
      </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
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
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
