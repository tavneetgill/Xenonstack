import React from 'react'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/signup" className="nav-link">Signup</Link>
    </nav>
  )
}

export default NavBar
