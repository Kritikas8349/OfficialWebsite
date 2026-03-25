import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">CAPEX 1.0</div>

      <ul className="nav-center">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Free Forex Signal</a></li>
        <li><a href="#">Insights</a></li>
      </ul>

      <div className="nav-right">
        <a href="#" className="cta">Get in Touch</a>

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
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Research</a>
        <a href="#">Free Forex Signal</a>
        <a href="#">Insights</a>
        <a href="#" className="cta mobile-cta">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;