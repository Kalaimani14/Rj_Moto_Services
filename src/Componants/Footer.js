import { Link } from "react-router-dom";
import "../Style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section max-w">
      <div className="footer-container">

        {/* LEFT: Logo + About */}
        <div className="footer-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Hero_MotoCorp_Logo.svg"
            alt="ProMechanic Logo"
            className="footer-logo"
          />
          <p>
            Rj Moto Services is Attur’s trusted multi-brand two-wheeler service center.
            We provide quality repair, maintenance, and customer-friendly service.
          </p>
        </div>

        {/* CENTER: Quick Links */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </div>

        {/* RIGHT: Contact + Social */}
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>📞 +91 9159456789</p>
          <p>📧 rjmotoservices7@gmail.com</p>
          <p>📍 Sarvoy main road, Attur,salem</p>

          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 Rj Moto Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
