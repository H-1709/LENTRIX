import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
// import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
  <Link to="/">
    <img src="/src/assets/logo.png" alt="AYLEN" />
  </Link>
  <span>AYLEN PHARMACEUTICALS Pvt. Ltd.</span>
</div>


      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About US</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/distributors">Distributors</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
