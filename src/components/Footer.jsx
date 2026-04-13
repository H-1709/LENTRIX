import "./Footer.css";
import logo from "../assets/LENTRIX.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin,FaPhone ,FaPhoneAlt,FaMailBulk } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LOGO + TAGLINE */}
        <div className="footer-section">
          <img src={logo} alt="LENTRIX Pharma" className="footer-logo" />
          <p className="footer-tagline">
            LENTRIX PHARMACEUTICAL PVT. LTD.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/distributors">Distribution Network</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
          <p className="footer-address">
            LENTRIX PHARMACEUTICAL PVT. LTD.<br />
            31, First Floor, Dev Nandan Shopping Centre,,<br />
            Nr. Morarji Desai Overbridge,<br />
            Chanakyapuri<br />
            Ahmedabad, Gujarat 380061
          </p>

          <p className="footer-info"> <FaPhoneAlt></FaPhoneAlt>+91 9909516525</p>
          <p className="footer-info"><FaMailBulk></FaMailBulk> lentrixlifesciences@gmail.com</p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h3>SOCIAL MEDIA</h3>

          <div className="footer-social">
            <a href="https://www.facebook.com/lentrixpharma#" target="_blank">
              <FaFacebook />
            </a>

            <a href="https://www.linkedin.com/in/ashish-rajyaguru-192a4222/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        Copyright © {new Date().getFullYear()} LENTRIX | All Rights Reserved
      </div>

    </footer>
  );
}
