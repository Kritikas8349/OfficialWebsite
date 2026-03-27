import React, { useEffect } from "react";
import "./Research.css";

const Research = () => {

  useEffect(() => {

    // 🔥 MARKET CHART
    const chartContainer = document.querySelector("#market-chart .chart-inner");

    if (chartContainer) {
      const chartScript = document.createElement("script");
      chartScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      chartScript.async = true;
      chartScript.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en"
      });

      chartContainer.appendChild(chartScript);
    }


    const overviewContainer = document.querySelector("#market-overview .chart-inner");

    if (overviewContainer && !overviewContainer.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;

      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        width: "100%",
        height: "400",
        isTransparent: true,
        showSymbolLogo: true,
        tabs: [
          {
            title: "Indices",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
              { s: "FOREXCOM:NSXUSD", d: "NASDAQ 100" }
            ]
          },
          {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR/USD" },
              { s: "FX:GBPUSD", d: "GBP/USD" }
            ]
          },
          {
            title: "Crypto",
            symbols: [
              { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
              { s: "BINANCE:ETHUSDT", d: "Ethereum" }
            ]
          }
        ]
      });

      overviewContainer.appendChild(script);
    }


    // 🔥 FOREX
    const forexContainer = document.querySelector("#forex-heatmap .chart-inner");

if (forexContainer && !forexContainer.querySelector("script")) {
  const forexScript = document.createElement("script");
  forexScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
  forexScript.async = true;

  forexScript.innerHTML = JSON.stringify({
    width: "100%",
    height: "400",
    currencies: ["EUR", "USD", "JPY", "GBP", "AUD", "CAD", "CHF"],
    isTransparent: false,
    colorTheme: "light",
    locale: "en"
  });

  forexContainer.appendChild(forexScript);
}

  }, []);

  return (
    <>
      {/* 🔥 HERO */}
      <section className="research-hero">
        <div className="research-content">
          <h1 className="fade-up">
            Market Research & <span>Strategic</span> Intelligence
          </h1>

          <p className="fade-up delay-1">
            Access real-time market intelligence, precision-based trade signals,
            and data-driven strategies.
          </p>

          <button className="primary-btn fade-up delay-2">
            Get Started
          </button>
        </div>
      </section>

      {/* 🔥 SECTION */}
      <section className="research-section">

        {/* 🔷 HEADER */}
        <div className="research-header">
          <div className="tag">MARKET INSIGHTS</div>
          <h2>Global Market <span>Overview</span></h2>
          <p>
          Analyze real-time forex and cryptocurrency market movements with advanced interactive charts, 
          live data insights, and dynamic visualizations. Stay informed with accurate trends, price actions,
           and market behavior to make smarter trading decisions.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="research-grid">

          {/* 📊 LEFT - MARKET CHART */}
          <div className="left-column">
            <div className="research-card">
              <h3>Live Market Chart</h3>

              <div id="market-chart" className="chart-box">
                <div className="chart-inner"></div>
              </div>

            </div>
          </div>

          {/* ✅ 📊 RIGHT - MARKET OVERVIEW (UPDATED) */}
          <div className="right-column">
            <div className="research-card">
              <h3>Market Overview</h3>

              <div id="market-overview" className="chart-box">
                <div className="chart-inner"></div>
              </div>

            </div>
          </div>


          <div className="full-width">
            <div className="research-card">
              <h3>Forex Heatmap</h3>

              <div id="forex-heatmap" className="chart-box">
                <div className="chart-inner"></div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Research;