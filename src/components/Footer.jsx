import "./Footer.css";
import logo from "../assets/LENTRIX.jpeg";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Footer() {
  return (
    <footer className="footer">
      <WhatsAppFloat />
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src={logo} alt="LENTRIX Pharmaceutical" className="footer-logo" />
            </Link>
            <p className="footer-tagline">LENTRIX PHARMACEUTICAL PVT. LTD.</p>
            <p className="footer-brand-note">
              Quality-driven formulations for healthcare professionals and patients.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/distributors">Distribution network</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Get in touch</h3>
            <p className="footer-address">
              LENTRIX PHARMACEUTICAL PVT. LTD.
              <br />
              B - 31, First Floor, Dev Nandan Shopping Centre,
              <br />
              Nr. Morarji Desai Overbridge,
              <br />
              Chanakyapuri
              <br />
              Ahmedabad, Gujarat 380061
            </p>
            <p className="footer-info">
              <FaPhoneAlt aria-hidden />
              <a href="tel:+919909516525">+91 9909516525</a>
            </p>
            <p className="footer-info">
              <FaMailBulk aria-hidden />
              <a href="mailto:lentrixlifesciences@gmail.com">
                lentrixlifesciences@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Social</h3>
            <p className="footer-social-intro">Connect with us</p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/lentrixpharma#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-rajyaguru-192a4222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} LENTRIX Pharmaceutical Pvt. Ltd. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
