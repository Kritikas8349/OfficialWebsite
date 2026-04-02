import React, { useState } from "react";
import "./Contact.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

import { FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    code: "+91",
    phone: "",
    message: ""
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxBUioNS4IWAhQhC81m3zgsQZrrA1A2KoPgh8ascgcEOQUJzAqc4JExMVC-8Ac5NuRPAQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      const text = await res.text();
      const data = JSON.parse(text);

      setLoading(false);

      if (data.status === "success") {
        setSuccess(true);

        // 🔥 reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          code: "+91",
          phone: "",
          message: ""
        });

        setTimeout(() => setSuccess(false), 3000);

      } else {
        alert("Something went wrong: " + data.message);
      }

    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Error submitting form");
    }
  };

  return (
    <div>

      {/*-------------------------------- BANNER--------------------------------- */}
      <section className="C-contact-banner">
        <div className="C-content">
          <h1>
            CONTACT <span>US</span>
          </h1>

          <p className="C-subtitle">
            We’re Here to <span>Help You</span>
          </p>

          <p className="C-desc">
            Have questions, feedback, or need support?
            Our team is ready to assist you — anytime, anywhere.
          </p>

          <div className="C-features">
            <div className="C-card">
              <FaHeadset className="C-icon" />
              <div>
                <h4>24/7 Support</h4>
                <p>Always Available</p>
              </div>
            </div>

            <div className="C-card">
              <IoFlash className="C-icon" />
              <div>
                <h4>Quick Response</h4>
                <p>We Reply Fast</p>
              </div>
            </div>

            <div className="C-card">
              <MdVerified className="C-icon" />
              <div>
                <h4>Trusted Service</h4>
                <p>Secure & Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------FORM SECTION------------------------------ */}
      <section className="contact-section">
        <div className="contact-container">

          {/* LEFT FORM */}
          <div className="contact-left">
            <h2>Send us a message</h2>
            <p>
              Have questions about trading, forex, or investments? Our team at
              <b> Capex Global Solution</b> is here to help you 24/7.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="input-group">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Contact Details</label>
                  <div className="phone-box">
                    <select
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+971</option>
                      <option>+44</option>
                    </select>

                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="input-group full">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="send-btn">Send Message</button>

            </form>
          </div>

          {/* RIGHT CARD */}
          <div className="contact-right">
            <h3>Capex Global Solution</h3>
            <p className="tagline">We are always here to help you.</p>

            <div className="info-box">
              <FiPhone />
              <div>
                <p>Hotline</p>
                <h4>+91 96910 43783</h4>
              </div>
            </div>

            <div className="info-box">
              <FaWhatsapp />
              <div>
                <p>WhatsApp</p>
                <h4>+91 96910 43783</h4>
              </div>
            </div>

            <div className="info-box">
              <FiMail />
              <div>
                <p>Email</p>
                <h4>capexglobal@gmail.com</h4>
              </div>
            </div>

            <div className="divider"></div>

            <p className="social-title">Connect with us</p>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
            </div>
          </div>

        </div>
      </section>

      {/* 🔄 LOADING POPUP */}
      {/* 🔄 LOADING MODAL */}
      {loading && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div className="loader"></div>
            <p>Submitting...</p>
          </div>
        </div>
      )}

      {/* ✅ SUCCESS MODAL */}
      {success && (
        <div className="popup-overlay">
          <div className="popup-card success-card">
            <h3>✅ Success</h3>
            <p>Form submitted successfully!</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;