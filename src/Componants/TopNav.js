import "../Style/TopNav.css";
import { Link } from "react-router-dom";
import "../Style/Nav.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaLocationArrow } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

export default function TopNav() {
  return (
    <div className="top-nav max-w">
      <div className="container tc">
        <div className="topnav-left">
          <div className="topnav-item">
            <a href="tel:+9132142585">+91 6381413566</a>
          </div>
        </div>

        <div className="topnav-right">
          <div className="topnav-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+9132142585"></a>
          </div>
          <div className="topnav-item">
            <FaWhatsapp className="icon" />
            <a href="https://wa.me/9132142585" target="_blank"></a>
          </div>
          <div className="topnav-item">
            <FaMapLocation className="icon" />
            <a href="https://instagram.com" target="_blank"></a>
          </div>
          <div className="topnav-item">
            <FaEnvelope className="icon" />
            <a href="mailto:abc12@gmail.com"></a>
          </div>
          <div className="topnav-item">
            <FaInstagram className="icon" />
            <a href="https://instagram.com" target="_blank"></a>
          </div>
         
          
        </div>
      </div>
        <nav className="navbar">
            <div className="max-w">
                {/* Left - Logo */}
                <div className="nav-logo">
                    <Link to="/">Rj Moto Service</Link>
                </div>

                {/* Center - Menu Items */}
                <ul className="nav-menu">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/booking">BOOKING</Link></li>
                    <li><Link to="/location">LOCATION</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>

                {/* Right - Buttons */}
                <div className="nav-buttons">
                    <Link to="/booking" className="btn book-now">Book Now</Link>
                    <Link to="/partner" className="btn partner">Become a Partner</Link>
                </div>
            </div>
        </nav>
    </div>
  );
}
