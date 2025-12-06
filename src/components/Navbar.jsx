import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logos1.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="nav">

      {/* LEFT - LOGO */}
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="AYLEN Logo" />
          {/* <span>AYLEN PHARMACEUTICALS Pvt. Ltd.</span> */}
        </Link>
      </div>

      {/* CENTER - NAV LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link className={location.pathname === "/" ? "active": ""} to="/">Home</Link></li>
        <li><Link className={location.pathname === "/products" ? "active": ""} to="/products">Products</Link></li>
        <li><Link className={location.pathname === "/distributors" ? "active": ""} to="/distributors">Distributors</Link></li>
        <li><Link className={location.pathname === "/career" ? "active": ""} to="/career">Career</Link></li>
        <li><Link className={location.pathname === "/about" ? "active": ""} to="/about">About</Link></li>
        <li><Link className={location.pathname === "/contact" ? "active": ""} to="/contact">Contact</Link></li>
      </ul>

      {/* RIGHT - HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}
