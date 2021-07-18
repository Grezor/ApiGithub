import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <Link style={navStyle} to="/stars">
          <li>stars</li>
        </Link>
        <Link style={navStyle} to="/repository">
          <li>repository</li>
        </Link>
        <Link style={navStyle} to="/follow">
          <li>Follow</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;