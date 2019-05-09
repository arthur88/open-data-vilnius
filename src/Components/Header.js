import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navba-expand-lg navbar-dark bg-dark mb10">
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="#" className="navbar-brand">
              Open Vilnius
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Pagrindinis
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/grafity-in-city"
              className="nav-link"
              activeClassName="active"
            >
              Graffity mieste
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dangerous-objects"
              className="nav-link"
              activeClassName="active"
            >
              Pavojingi Objektai mieste
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
