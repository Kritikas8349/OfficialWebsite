import React from "react";
import "./Services.css";
import heroImg from "../assets/mid.png";

const Services = () => {
  return (
    <section 
      className="servicesHero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      {/* 🔵 Overlay */}
      <div className="overlay"></div>

      {/* LEFT CONTENT */}
      <div className="heroContent">
        <p className="tag">Forex Trading</p>

        <h1>Forex Services</h1>

        <p className="desc">
          Trade forex with the global market leader.
          Get access to 1000+ trading instruments,
          tight spreads and fast execution.
        </p>

        <button className="ctaBtn">
          Start Trading Forex
        </button>
      </div>

    </section>
  );
};

export default Services;