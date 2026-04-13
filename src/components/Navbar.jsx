import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/LENTRIX.jpeg";
import { Link, useLocation } from "react-router-dom";

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-header">
      <nav
        className={`nav${scrolled ? " nav--scrolled" : ""}`}
        aria-label="Primary"
      >
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src={logo} alt="LENTRIX Pharmaceutical" />
          </Link>
        </div>

        <ul
          id="primary-navigation"
          className={`nav-links ${open ? "open" : ""}`}
        >
          <li>
            <Link
              className={location.pathname === "/" ? "active" : ""}
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/products" ? "active" : ""}
              to="/products"
              onClick={closeMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/distributors" ? "active" : ""
              }
              to="/distributors"
              onClick={closeMenu}
            >
              Distributors
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/career" ? "active" : ""}
              to="/career"
              onClick={closeMenu}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? "active" : ""}
              to="/about"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/contact" ? "active" : ""}
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="hamburger"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>
    </header>
  );
}
