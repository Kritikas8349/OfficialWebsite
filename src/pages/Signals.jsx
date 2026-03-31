import React from "react";
import "./Signals.css";
import heroBg from "../assets/signalHero.png"; // your image

const Signals = () => {
  return (
    <section
      className="signals-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="signals-overlay"></div>

      <div className="signals-content">
        <h1>
          Turn Market Moves into <br />
          Profitable Trades
        </h1>

        {/* dotted line */}
        <div className="dotted-line"></div>

        <p>
          Access real-time forex signals, powerful tools, and clear insights to
          trade smarter, faster, and with confidence.
        </p>
      </div>
    </section>
  );
};

export default Signals;