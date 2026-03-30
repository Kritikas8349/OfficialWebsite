import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

// 🔥 IMPORT BOTH LOGOS
import logo from "../assets/logo.png";     // light (for transparent)
import logo1 from "../assets/logo1.png";   // dark (for white bg)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔥 SCROLL DETECT (FIXED)
  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY); // 🔥 debug
  
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll(); // initial run
  
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
        
        {/* 🔥 LOGO SWITCH FIXED */}
        <div className="logo">
          <img
            src={scrolled ? logo : logo1}
            alt="Capex Logo"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-center">
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
          <li><NavLink to="/research" className="nav-link">Research</NavLink></li>
          <li><NavLink to="/signals" className="nav-link">Forex Signal</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact us</NavLink></li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          
          {/* DESKTOP CTA */}
          <button
            className="cta-navbar"
            onClick={() => setShowModal(true)}
          >
            Get in Touch
          </button>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* 🔥 MOBILE MENU */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/research" onClick={() => setIsOpen(false)}>Research</NavLink>
          <NavLink to="/signals" onClick={() => setIsOpen(false)}>Free Forex Signal</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact us</NavLink>

          {/* 🔥 MOBILE CTA */}
          <button
            className="mobile-cta"
            onClick={() => setShowModal(true)}
          >
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

      {/* ✅ SUCCESS */}
      {success && (
        <div className="success-popup">
          ✅ Successfully submitted! We will contact you soon.
        </div>
      )}
    </>
  );
};

export default Navbar;