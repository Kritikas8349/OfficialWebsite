import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 NEW STATES
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Capex Logo" />
        </div>

        <ul className="nav-center">
          <li>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/research" className="nav-link">
              Research
            </NavLink>
          </li>

          <li>
            <NavLink to="/signals" className="nav-link">
              Forex Signal
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="nav-right">
          {/* 🔥 CLICK HERE */}
          <button className="cta-navbar" onClick={() => setShowModal(true)}>
            Get in Touch
          </button>

          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/research" onClick={() => setIsOpen(false)}>Research</NavLink>
          <NavLink to="/signals" onClick={() => setIsOpen(false)}>Free Forex Signal</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact us</NavLink>
          <button className="cta mobile-cta" onClick={() => setShowModal(true)}>
            Get in Touch
          </button>
        </div>
      </nav>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Get in Touch</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />

              <div className="phone-group">
                <input type="text" placeholder="+91" required />
                <input type="text" placeholder="Phone Number" required />
              </div>

              <textarea placeholder="Your Message" rows="4" required />

              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ SUCCESS POPUP */}
      {success && (
        <div className="success-popup">
          ✅ Successfully submitted! We will contact you soon.
        </div>
      )}
    </>
  );
};

export default Navbar;