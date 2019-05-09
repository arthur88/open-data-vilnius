import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navba-expand-lg navbar-dark bg-dark mb10">
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="navbar-brand">
              Open Vilnius
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/" className="nav-link" activeclassname="active">
              Pagrindinis
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/grafity-in-city"
              className="nav-link"
              activeclassname="active"
            >
              Graffity mieste
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dangerous-objects"
              className="nav-link"
              activeclassname="active"
            >
              Pavojingi Objektai mieste
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
