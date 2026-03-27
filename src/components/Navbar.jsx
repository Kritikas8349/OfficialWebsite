import React, { useState, useEffect } from "react";
import "./Navbar.css";

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
        <div className="logo">CAPEX 1.0</div>

        <ul className="nav-center">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/research">Research</a></li>
          <li><a href="#">Free Forex Signal</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>

        <div className="nav-right">
          {/* 🔥 CLICK HERE */}
          <button className="cta" onClick={() => setShowModal(true)}>
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
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/research">Research</a>
          <a href="#">Free Forex Signal</a>
          <a href="/contact">Contact us</a>
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