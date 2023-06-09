import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-items">
          <h2>ProjectLogo</h2>
          <div className="nav-link">
            <Link className="nav" to="/">
              Home
            </Link>

            <Link className="nav" to="/create">
              Create
            </Link>
            <Link className="nav" to="#">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
