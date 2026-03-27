import React, { useEffect, useState, useRef } from "react";
import "./Services.css";


// const currencies = ["EUR", "USD", "AUD", "GBP", "NZD", "CAD", "CHF", "JPY", "CNY"];

const Services = () => {

    const [activeTab, setActiveTab] = useState("heatmap");

    // ✅ FIXED REFS
    const forexRef = useRef(null);
    const comexRef = useRef(null);
    const forexChartRef = useRef(null);
    const comexChartRef = useRef(null);

    /* ---------------- FOREX HEATMAP + CROSS ---------------- */
    useEffect(() => {
        if (!forexRef.current) return;

        forexRef.current.innerHTML = "";

        const script = document.createElement("script");

        script.src =
            activeTab === "heatmap"
                ? "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js"
                : "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";

        script.async = true;

        script.innerHTML = JSON.stringify({
            width: "100%",
            height: 500,
            currencies: ["EUR", "USD", "JPY", "GBP", "AUD", "CAD", "CHF", "NZD"],
            colorTheme: "light",
            locale: "en"
        });

        forexRef.current.appendChild(script);

        return () => {
            if (forexRef.current) forexRef.current.innerHTML = "";
        };

    }, [activeTab]);

    /* ---------------- FOREX CHART ---------------- */
    useEffect(() => {
        if (!forexChartRef.current) return;

        forexChartRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.async = true;

        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "FX:EURUSD",
            interval: "60",
            timezone: "Asia/Kolkata",
            theme: "light",
            style: "1",
            locale: "en",
            hide_top_toolbar: true,
            hide_side_toolbar: true
        });

        forexChartRef.current.appendChild(script);
    }, []);

    /* ---------------- COMEX HEATMAP ---------------- */
    useEffect(() => {
        if (!comexRef.current) return;

        comexRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.async = true;

        script.innerHTML = JSON.stringify({
            symbols: [
                ["Gold", "COMEX:GC1!"],
                ["Silver", "COMEX:SI1!"],
                ["Copper", "COMEX:HG1!"]
            ],
            width: "100%",
            height: 500,
            colorTheme: "light",
            locale: "en"
        });

        comexRef.current.appendChild(script);
    }, []);

    /* ---------------- COMEX CHART ---------------- */
    useEffect(() => {
        if (!comexChartRef.current) return;

        comexChartRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.async = true;

        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "COMEX:GC1!",
            interval: "60",
            timezone: "Asia/Kolkata",
            theme: "light",
            style: "1",
            locale: "en",
            hide_top_toolbar: true,
            hide_side_toolbar: true
        });

        comexChartRef.current.appendChild(script);
    }, []);

    return (
        <div>

            {/*--------------------------------- HERO ------------------------------------*/}
            <section className="servicesHero">
                <div className="overlay"></div>

                <div className="heroContent">
                    <p className="tag">Our Services</p>

                    <h1>Forex Trading Solutions</h1>

                    <p className="desc">
                        Explore powerful forex services designed for modern traders.
                        Trade smarter with real-time insights and automation.
                    </p>

                    <div className="servicesList">
                        <span>✔ Live Market Analysis</span>
                        <span>✔ Copy Trading</span>
                        <span>✔ Forex Signals</span>
                        <span>✔ Risk Management</span>
                        <span>✔ Trading Bots</span>
                        <span>✔ Portfolio Tracking</span>
                    </div>

                    <button
                        className="ctaBtn"
                        onClick={() => {
                            document.querySelector(".forex-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Explore Heatmap
                    </button>
                </div>
            </section>

            {/*--------------------------------- HEATMAP----------------------------------*/}
            <section className="forex-section">

                {/* HEADER */}
                <div className="forex-header">
                    <p>Forex market</p>
                    <h1>
                        {activeTab === "heatmap" ? "Heatmap" : "Cross rates"}
                    </h1>
                </div>

                {/* TOP BAR (TABS + SWITCH SAME LINE) */}
                <div className="forex-topbar">

                    {/* LEFT → TABS */}
                    <div className="forex-tabs">
                        {["Overview", "Europe & Americas", "Asia-Pacific", "G7 & BRICS"].map(
                            (tab, i) => (
                                <button key={i} className={i === 0 ? "active" : ""}>
                                    {tab}
                                </button>
                            )
                        )}
                    </div>

                    {/* RIGHT → SWITCH */}
                    <div className="forex-switch">
                        <button
                            className={activeTab === "cross" ? "active" : ""}
                            onClick={() => setActiveTab("cross")}
                        >
                            Cross rates
                        </button>

                        <button
                            className={activeTab === "heatmap" ? "active" : ""}
                            onClick={() => setActiveTab("heatmap")}
                        >
                            Heatmap
                        </button>
                    </div>

                </div>

                {/* WIDGET */}
                <div className="forex-widget" ref={forexRef}></div>

                {/* TIME FILTER */}
                <div className="time-filter">
                    {["1D", "1W", "1M", "3M", "6M", "1Y", "5Y", "All"].map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

            </section>

            {/*--------------------------------- graph------------------------------------*/}
            <section className="forexChart-section">

                {/* HEADER */}
                <div className="fc-header">
                    <p>Forex market</p>
                    <h1>Live Chart</h1>
                </div>

                {/* TOP BAR */}
                <div className="fc-topbar">

                    {/* LEFT TABS */}
                    <div className="fc-tabs">
                        {["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"].map((pair, i) => (
                            <button key={i} className={i === 0 ? "active" : ""}>
                                {pair}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT FILTER */}
                    <div className="fc-switch">
                        <button className="active">Chart</button>
                        <button>Indicators</button>
                    </div>

                </div>

                {/* CHART BOX */}
                <div className="fc-chart-card">
                    <div
                        className="tradingview-widget-container"
                        ref={forexChartRef}
                    ></div>
                </div>

                {/* TIME FILTER */}
                <div className="fc-time">
                    {["1m", "5m", "15m", "1H", "4H", "1D"].map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

            </section>

            {/* ---------------- --------------COMEX HEATMAP------------------------------*/}
            <section className="forex-section">

                <div className="forex-header">
                    <p>Comex market</p>
                    <h1>Gold Heatmap</h1>
                </div>

                <div className="forex-topbar">

                    <div className="forex-tabs">
                        {["Gold", "Silver", "Copper"].map((tab, i) => (
                            <button key={i} className={i === 0 ? "active" : ""}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="forex-switch">
                        <button className="active">Overview</button>
                        <button>Performance</button>
                    </div>

                </div>

                <div className="forex-widget" ref={comexRef}></div>

                <div className="time-filter">
                    {["1D", "1W", "1M", "3M", "6M", "1Y"].map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

            </section>

            {/* ---------------- -----------------GOLD CHART------------------- ----------*/}
            <section className="forexChart-section">

                <div className="fc-header">
                    <p>Comex market</p>
                    <h1>Gold Live Chart</h1>
                </div>

                <div className="fc-topbar">

                    <div className="fc-tabs">
                        {["Gold", "Silver", "Copper"].map((item, i) => (
                            <button key={i} className={i === 0 ? "active" : ""}>
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="fc-switch">
                        <button className="active">Chart</button>
                        <button>Indicators</button>
                    </div>

                </div>

                <div className="fc-chart-card">
                    <div
                        className="tradingview-widget-container"
                        ref={comexChartRef}
                    ></div>
                </div>

                <div className="fc-time">
                    {["1m", "5m", "15m", "1H", "4H", "1D"].map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

            </section>

            {/* ---------------------------why we are best --------------------------------*/}

            <section className="whyBest">

                <div className="wb-header">
                    <h2>Why We Are Best</h2>
                    <div className="line"></div>
                </div>

                <div className="wb-container">

                    <div className="wb-card">
                        <div className="icon">💰</div>
                        <h3>Right Investment</h3>
                        <p>
                            We help you choose the best strategies to maximize your returns
                            with smart and data-driven decisions.
                        </p>
                    </div>

                    <div className="wb-card">
                        <div className="icon">🤝</div>
                        <h3>Personalized Assistance</h3>
                        <p>
                            Get 24/7 expert support with tailored guidance based on your
                            trading goals and risk profile.
                        </p>
                    </div>

                    <div className="wb-card">
                        <div className="icon">👨‍💼</div>
                        <h3>Experienced</h3>
                        <p>
                            Backed by 10+ years of industry expertise to deliver reliable
                            and consistent results.
                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Services;