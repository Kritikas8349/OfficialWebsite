import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import commodities from "../assets/commodities.jpg"


const Footer = () => {
  return (

    <>

      <footer className="footer">

        {/* TOP SECTION */}
        <div className="footer__container">

          {/* LOGO */}
          <div className="footer__col">
            <div className="footer__logo">
              <img src={commodities} alt="logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>About Us</li>
              <li>Services</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer__col">
            <h4>Quick Link</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Booking</li>
              <li>Pages</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION (ALIGNED WITH COLUMNS) */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">

            {/* Column 1 */}
            <div className="footer__item">
              <FaMapMarkerAlt />
              <span>USA</span>
            </div>

            {/* Column 2 */}
            <div className="footer__item">
              <FaPhoneAlt />
              <span>(+876) 765 665</span>
            </div>

            {/* Column 3 */}
            <div className="footer__item">
              <FaEnvelope />
              <span>mail@capex.id</span>
            </div>

            {/* Column 4 */}
            <div className="footer__socials">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
            </div>

          </div>

          {/* DIVIDER */}
          <div className="footer__divider"></div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer__copyright">
          © 2026 Capex - All Rights Reserved
        </div>

      </footer>
    </>
  );
};

export default Footer;