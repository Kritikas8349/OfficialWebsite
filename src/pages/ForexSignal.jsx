import React from "react";
import "./ForexSignal.css";

import { FaChartLine, FaUserTie, FaBell, FaTrophy } from "react-icons/fa";

const ForexSignal = () => {
    return (
        <div>
            <section className="forexSignal">
                <div className="overlay"></div>

                <div className="fs-content">
                    <h1>
                        Turn Market Moves into
                        Profitable  <br />
                    </h1>

                    <p>
                        Access real-time forex signals, powerful <br /> tools, and clear insights
                        to trade <br /> smarter, faster, and  with <br /> confidence.
                    </p>
                </div>
            </section>

            {/*-------------------------------------- why choose us---------------------- */}

            <section className="whyChoose">

                <div className="wc-header">
                    <h2>Why Choose Us</h2>
                    <p>
                        Powerful tools and insights to elevate your trading success.
                    </p>
                </div>

                <div className="wc-container">

                    <div className="wc-card">
                        <div className="wc-icon"><FaChartLine /></div>
                        <div>
                            <h3>Accurate Forex Signals</h3>
                            <p>
                                Receive highly accurate, real-time signals for profitable trades.
                            </p>
                        </div>
                    </div>

                    <div className="wc-card">
                        <div className="wc-icon"><FaUserTie /></div>
                        <div>
                            <h3>Expert Analysis</h3>
                            <p>
                                Learn from our team of experienced traders who provide in-depth market analysis.
                            </p>
                        </div>
                    </div>

                    <div className="wc-card">
                        <div className="wc-icon"><FaBell /></div>
                        <div>
                            <h3>Real-Time Alerts</h3>
                            <p>
                                Get instant alerts on your phone so you never miss a trading opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="wc-card">
                        <div className="wc-icon"><FaTrophy /></div>
                        <div>
                            <h3>Proven Track Record</h3>
                            <p>
                                Join countless traders who have achieved success with our reliable signals.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            {/*------------------------------------- pricing --------------------------*/}
            <section className="pricing">

                <div className="pricing-header">
                    <h2>Choose your Trading Plan</h2>
                    <p>Start Growing with Professional Forex Signals</p>
                </div>

                <div className="pricing-container">

                    {/* BASIC */}
                    <div className="price-card">
                        <h3>Basic</h3>
                        <h2>$199<span>/mo</span></h2>
                        <p className="old">$599 Price</p>

                        <ul>
                            <li>✔ Daily 2–3 signals</li>
                            <li>✔ RR: 1:1 / 1.5</li>
                            <li>✔ Access to Experts Panel</li>
                            <li>✔ Live monitoring</li>
                            <li>✔ Economic updates</li>
                            <li>✔ Important news</li>
                        </ul>

                        <button>Buy Now</button>
                    </div>

                    {/* PRO */}
                    <div className="price-card pro">
                        <span className="badge">Most Popular</span>

                        <h3>Pro</h3>
                        <h2>$499<span>/mo</span></h2>
                        <p className="old">$999 Price</p>

                        <ul>
                            <li>✔ Premium services</li>
                            <li>✔ Daily 3–4 signals</li>
                            <li>✔ Newsletter</li>
                            <li>✔ Weekly calendar</li>
                            <li>✔ RR: 1:1.5 / 2</li>
                            <li>✔ Expert panel access</li>
                        </ul>

                        <button>Buy Now</button>
                    </div>

                    {/* ELITE */}
                    <div className="price-card">
                        <h3>Elite</h3>
                        <h2>$999<span>/mo</span></h2>
                        <p className="old">$2499 Price</p>

                        <ul>
                            <li>✔ Daily 4–6 signals</li>
                            <li>✔ Newsletter</li>
                            <li>✔ Weekly calendar</li>
                            <li>✔ RR: 1:2 / 4</li>
                            <li>✔ Sniper entries</li>
                            <li>✔ Expert panel</li>
                        </ul>

                        <button>Buy Now</button>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default ForexSignal;