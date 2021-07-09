import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
 
export default function Navbar() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle}>
          <li to="/repository">Repository</li>
        </Link>
        <Link style={navStyle}>
          <li to="/stars">Stars</li>
        </Link>
      </ul>
    </nav>
  )
}
