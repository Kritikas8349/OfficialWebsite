import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { FaChartLine, FaGlobe, FaBolt } from "react-icons/fa";

import img1 from "../assets/home.png";
import img2 from "../assets/home2.jpg";

import about from "../assets/about.png";

import forex from "../assets/forex.jpg";
import metal from "../assets/metal.jpg";
import commodities from "../assets/commodities.jpg";
import indices from "../assets/indices.jpg";
import digitalCurrency from "../assets/digitalCurrency.jpg";
import etf from "../assets/etf.jpg";

import BuyandSell from "../assets/BuyandSell.webp";

import ourService1 from "../assets/ourService1.png";
import ourService2 from "../assets/ourService2.png";

import markettrade from "../assets/markettrade.webp";


const images = [img1, img2];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  // ✅ SLOW IMAGE SLIDER (10 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ✅ TEXT ANIMATION ONLY ONCE
  useEffect(() => {
    setAnimateText(true);
  }, []);


  //Services

  const serviceRef = useRef(null);
  const [serviceVisible, setServiceVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServiceVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  //---------About
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);


  //------Buy and Sell
  const dnaRef = useRef(null);
  const [dnaVisible, setDnaVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDnaVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (dnaRef.current) {
      observer.observe(dnaRef.current);
    }

    return () => observer.disconnect();
  }, []);


  // Our Service
  const whyRef = useRef(null);
  const [whyVisible, setWhyVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true);

          setTimeout(() => {
            setProgress(94);
          }, 1200);

          // ✅ STOP OBSERVING after first trigger
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 } // slightly higher = better UX
    );

    if (whyRef.current) observer.observe(whyRef.current);

    return () => observer.disconnect();
  }, []);


  //DNA 
  const tradeRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 🔥 trigger animation
        }
      },
      {
        threshold: 0.3, // 🔥 30% visible pe trigger
      }
    );

    if (tradeRef.current) {
      observer.observe(tradeRef.current);
    }

    return () => {
      if (tradeRef.current) {
        observer.unobserve(tradeRef.current);
      }
    };
  }, []);

  //FAQs
  const [activeIndex, setActiveIndex] = useState(2); // default open
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (faqRef.current) observer.observe(faqRef.current);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "How do I start learning to trade if I have zero knowledge?",
      answer: "Start with basics like market structure, risk management, and practice with demo accounts."
    },
    {
      question: "Where can i find daily forex market analysis ?",
      answer: "You can follow trusted platforms, blogs, and financial news portals."
    },
    {
      question: "What financial markets do you cover in your daily analysis?",
      answer:
        "We cover forex pairs, cryptocurrencies, stock indices, commodities like gold & oil, and major economic events."
    },
    {
      question: "Do you provide trading signals or just education?",
      answer: "We focus on education and analysis to help you make your own decisions."
    },
    {
      question: "Is risk management really that important for a beginner?",
      answer: "Yes, it is the most important part of trading."
    },
    {
      question: "Who manages investments here?",
      answer: "We provide tools & insights — you manage your own trades."
    }
  ];

  return (

    <>
      <section className="hero">

        {/* SLIDER */}
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt="Trading Background" />
            </div>
          ))}
        </div>

        {/* OVERLAY */}
        <div className="overlay"></div>

        {/* CONTENT */}
        <div className={`hero-content ${animateText ? "animate" : ""}`}>
          <h1>
            Master the Markets with <br />
            <span>Capex Smart Insights</span>. <br />
            Better Decisions.
          </h1>

          <p>
            Capex empowers you with expert market analysis, beginner-friendly education,
            and proven strategies to help you trade confidently and consistently.
          </p>

          <button className="hero-btn">Start Trading</button>
        </div>

        {/* ✅ SLIDER INDICATORS */}
        <div className="slider-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
            ></div>
          ))}
        </div>

      </section>


      <section
        className={`about-section ${aboutVisible ? "show-about" : ""}`}
        id="about"
        ref={aboutRef}
      >
        {/* Left - Single Image Frame */}
        <div className={`about-image-frame ${aboutVisible ? "show-left" : ""}`}>
          <img src={about} alt="About Us" />
        </div>

        {/* Right Content */}
        <div className={`about-content ${aboutVisible ? "show-right" : ""}`}>
          <p className="about-tag">ABOUT US</p>

          <h2 className="about-title">
            Your Partner in Smarter Trading Decisions
          </h2>

          <p className="about-text">
            We are a dedicated team focused on delivering high-quality digital
            solutions that help businesses grow and succeed. Our core values are
            innovation, transparency, and customer satisfaction.
          </p>

          <blockquote className="about-quote">
            “Our mission is to empower businesses with modern, data-driven solutions
            that bring real growth, trust, and long-lasting success.”
          </blockquote>

          <ul className="about-list">
            <li>✔ Over 10+ years of experience in the industry</li>
            <li>✔ Trusted by clients worldwide</li>
            <li>✔ Dedicated support team</li>
            <li>✔ Commitment to long-term partnerships</li>
            <li>✔ Personalized trading guidance and support</li>
            <li>✔ Expertise in stocks, forex, crypto, and commodities</li>
            <li>✔ High emphasis on data privacy and security</li>
          </ul>

        </div>
      </section>


      <section className="learn-section">
  <div className="learn-bg"></div>
  <div className="learn-overlay"></div>

  <div className="learn-content">
    <h2>
      Learn and trade what you <br />
      want. When you want.
    </h2>

    <p>
      Improve your strategy and become a more confident trader with expert
      market analysis, advanced trading tools and comprehensive educational materials.
    </p>

    <button className="learn-btn">START TRADING</button>
  </div>
</section>



      <section
        className={`trade-section ${serviceVisible ? "show" : ""}`}
        ref={serviceRef}
      >
        <div className="section-tag">OUR SERVICES</div>
        <h2>What can you trade with Capex?</h2>

        <div className="scroll-wrapper">

          <button className="arrow left" onClick={() => scroll("left")}>
            ←
          </button>

          <div className="cards-container" ref={scrollRef}>

            <div className={`card ${serviceVisible ? "card-show" : ""}`}>
              <img src={forex} alt="Forex" />
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>Forex</h3>
                  <p>Trade 70+ major, minor and exotic currency pairs.</p>
                </div>
              </div>
            </div>

            <div className={`card ${serviceVisible ? "card-show" : ""}`}>
              <img src={metal} alt="Metals" />
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>Metals</h3>
                  <p>Trade Gold, Silver, Platinum and more.</p>
                </div>
              </div>
            </div>

            <div className={`card ${serviceVisible ? "card-show" : ""}`}>
              <img src={commodities} alt="Commodities" />
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>Commodities</h3>
                  <p>Trade Oil, Gas, Corn and Sugar.</p>
                </div>
              </div>
            </div>

            <div className={`card ${serviceVisible ? "card-show" : ""}`}>
              <img src={indices} alt="Indices" />
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>Indices</h3>
                  <p>Trade major global stock indices including the NASDAQ 100 and S&P 500.</p>
                </div>
              </div>
            </div>

            <div className={`card ${serviceVisible ? "card-show" : ""}`}>
              <img src={digitalCurrency} alt="Digital Currencies" />
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>Digital Currencies</h3>
                  <p>Trade Bitcoin, Ethereum, Litecoin, and altcoin.</p>
                </div>
              </div>
            </div>

            <div className={`card ${serviceVisible ? "card-show" : ""}`}>
              <img src={etf} alt="ETFs" />
              <div className="card-content">
                <div className="card-content-inner">
                  <h3>ETFs</h3>
                  <p>Trade multiple investment classes and sector with ETFs.</p>
                </div>
              </div>
            </div>

          </div>

          <button className="arrow right" onClick={() => scroll("right")}>
            →
          </button>

        </div>
      </section>


      <section className="dna-section" ref={dnaRef}>
        <div className="dna-container">

          {/* LEFT IMAGE */}
          <div className={`dna-image ${dnaVisible ? "show-left" : ""}`}>
            <img src={BuyandSell} alt="Trading DNA" />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`dna-content ${dnaVisible ? "show-right" : ""}`}>
            <h2>Trade technology is in our DNA</h2>

            <ul>
              <li>20+ years of trading experience</li>
              <li>60+ international awards</li>
              <li>Globally regulated brand</li>
              <li>Segregated client funds</li>
              <li>24/7 multilingual Customer Support</li>
            </ul>
          </div>

        </div>
      </section>


      <section className="why-section" ref={whyRef}>
        <div className="why-header">
          <div className="tag">WHY CHOOSE US</div>
          <h2>
            What Makes Us <span>Different</span>
          </h2>

          <p>
            We focus on delivering clear, practical trading knowledge backed by real
            market behavior. Our goal is to help traders build confidence, understand
            price movement, and make smarter decisions without confusion or noise.
          </p>
        </div>

        <div className="why-container">

          {/* LEFT SIDE */}
          <div className="why-left">

            <div className={`green-box ${whyVisible ? "show-left" : ""}`}>
              <div className="top-cards">
                <img src={ourService1} alt="" className="card-big" />
                <img src={ourService2} alt="" className="card-small" />
              </div>
            </div>

            {/* PROGRESS */}
            <div className={`progress-card ${whyVisible ? "show-progress" : ""}`}>
              <h4>Invest Goal Progress</h4>

              <div className="progress-info">
                <span>$46,500 of $50,000</span>
                <span>{progress}%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="why-right">

            {[
              {
                icon: <FaChartLine />,
                title: "Simple Explanations",
                desc: "Trading concepts are broken down into simple, easy-to-understand ideas so beginners can learn without confusion."
              },
              {
                icon: <FaGlobe />,
                title: "Real Market Focus",
                desc: "We focus only on real market behavior, trends, and price action instead of random opinions."
              },
              {
                icon: <FaBolt />,
                title: "Volatility Awareness",
                desc: "Understand sudden price movements and market events so you can make better trading decisions."
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`why-card ${whyVisible ? "card-show" : ""}`}
                style={{ transitionDelay: `${i * 0.25}s` }}
              >

                {/* 🔥 PERFECT ICON CIRCLE */}
                <div className="icon-box">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      <section className="trade-sec" ref={tradeRef}>
      <div className="trade-box">

        {/* LEFT CONTENT */}
        <div className={`trade-left ${isVisible ? "animate-left" : ""}`}>
          <h2>Transforming Trading since 2005</h2>

          <p>
            Transforming trading is more than just a mission statement.
            It is embedded in everything we do. We build scalable,
            sustainable and reliable financial technology that always
            puts the trader first.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={`trade-right ${isVisible ? "animate-right" : ""}`}>
        <img src={markettrade} alt="Trading Visual" />
        </div>

      </div>
    </section>

    <section className="faq-section" ref={faqRef}>
      <div className="faq-container">

        {/* LEFT */}
        <div className={`faq-left ${isVisible ? "fade-left" : ""}`}>
          <span className="faq-tag">FAQ</span>

          <h2>
            Common Investment <br />
            <span>Guide</span>
          </h2>

          <p>
            Stay ahead of the markets with expert insights on forex, inflation trends,
            central bank policy, commodities, and digital assets delivering actionable
            intelligence for informed investing.
          </p>
        </div>

        {/* RIGHT */}
        <div className={`faq-right ${isVisible ? "fade-right" : ""}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
};

export default Home;