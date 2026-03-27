import React, { useEffect, useState, useRef } from "react";
import "./Research.css";

const Research = () => {

    useEffect(() => {
        // TradingView script loader
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            width: "100%",
            height: "400",
            currencies: ["EUR", "USD", "JPY", "GBP", "AUD", "CAD", "CHF"],
            isTransparent: true,
            colorTheme: "dark",
            locale: "en"
        });

        document.getElementById("forex-heatmap").appendChild(script);

        // Crypto Heatmap
        const script2 = document.createElement("script");
        script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
        script2.async = true;
        script2.innerHTML = JSON.stringify({
            dataSource: "Crypto",
            blockSize: "market_cap_calc",
            blockColor: "change",
            locale: "en",
            symbolUrl: "",
            colorTheme: "dark",
            hasTopBar: false,
            isDataSetEnabled: false,
            isZoomEnabled: true,
            hasSymbolTooltip: true,
            width: "100%",
            height: "400"
        });

        document.getElementById("crypto-heatmap").appendChild(script2);

    }, []);

    return (
        <>
            <section className="research-hero">

                {/* CONTENT */}
                <div className="research-content">
                    <h1>
                        Market Research & <span>Strategic </span> Market Intelligence
                    </h1>

                    <p>
                        Access real-time market intelligence, precision-based trade signals,
                        and data-driven strategies built for Forex, Crypto, and Commodities trading.
                    </p>

                    {/* 🔥 CTA BUTTON */}
                    <button className="primary-btn">Get Started Now</button>
                </div>

            </section>
            <section className="research-section">

                {/* 🔷 HEADER */}
                <div className="research-header">
                    <div className="tag">MARKET INSIGHTS</div>
                    <h2>Global Market <span>Overview</span></h2>
                    <p>
                        Analyze real-time forex and crypto market movements with advanced visual heatmaps.
                    </p>
                </div>

                {/* 🔥 GRID */}
                <div className="research-grid">

  {/* LEFT */}
  <div className="left-column">
    <div className="research-card overview">
      <h3>Market Overview</h3>

      <ul>
        <li><span>S&P 500</span> <span className="positive">+0.45%</span></li>
        <li><span>NASDAQ</span> <span className="negative">-0.32%</span></li>
        <li><span>Dow Jones</span> <span className="positive">+0.18%</span></li>
        <li><span>Gold</span> <span className="positive">+1.12%</span></li>
        <li><span>Crude Oil</span> <span className="negative">-0.67%</span></li>
      </ul>
    </div>
  </div>

  {/* RIGHT */}
  <div className="right-column">
    <div className="research-card">
      <h3>Forex Heatmap</h3>
      <div id="forex-heatmap" className="heatmap-box"></div>
    </div>
  </div>

  {/* FULL WIDTH */}
  <div className="full-width">
    <div className="research-card">
      <h3>Crypto Heatmap</h3>
      <div id="crypto-heatmap" className="heatmap-box"></div>
    </div>
  </div>

</div>

            </section>
        </>
    );
};

export default Research;