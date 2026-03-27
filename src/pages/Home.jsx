import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { FaChartLine, FaGlobe, FaBolt } from "react-icons/fa";

import img1 from "../assets/home.png";
import img2 from "../assets/home2.jpg";
import img1Mobile from "../assets/homeMobile.png";
import img2Mobile from "../assets/homeMobile2.png";

import about from "../assets/about.png";

import forex from "../assets/forex.jpg";
import metal from "../assets/metal.jpg";
import commodities from "../assets/commodities.jpg";
import indices from "../assets/indices.jpg";
import digitalCurrency from "../assets/digitalCurrency.jpg";
import etf from "../assets/etf.jpg";

import BuyAndSell from "../assets/BuyAndSell.webp";

import ourService1 from "../assets/ourService1.png";
import ourService2 from "../assets/ourService2.png";

import markettrade from "../assets/markettrade.webp";


/* ================= IMAGES ================= */
const desktopImages = [img1, img2];
const mobileImages = [img1Mobile, img2Mobile];

const Home = () => {
  /* ================= HERO ================= */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimateText(true);
  }, []);

  /* ================= SERVICES ================= */
  const serviceRef = useRef(null);
  const [serviceVisible, setServiceVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setServiceVisible(true);
    });

    if (serviceRef.current) observer.observe(serviceRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL ================= */
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 200;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  /* ================= ABOUT ================= */
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.unobserve(entry.target); // run only once
        }
      },
      {
        threshold: 0.3, // 
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);
  /* ================= DNA ================= */
  const dnaRef = useRef(null);
  const [dnaVisible, setDnaVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDnaVisible(true);
          observer.unobserve(entry.target); // 👈 run only once
        }
      },
      {
        threshold: 0.3, // 👈 jab 40% section visible hoga tab chalega
        rootMargin: "0px 0px -50px 0px", // 👈 thoda smooth early trigger
      }
    );

    if (dnaRef.current) observer.observe(dnaRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= WHY ================= */
  const whyRef = useRef(null);
  const [whyVisible, setWhyVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true);

          // 👇 delay after section visible
          setTimeout(() => {
            setProgress(94);
          }, 1200);

          observer.unobserve(entry.target); // run once
        }
      },
      {
        threshold: 0.20, // 👈 important
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (whyRef.current) observer.observe(whyRef.current);

    return () => observer.disconnect();
  }, []);

  /* ================= TRADE ================= */
  const tradeRef = useRef(null);
  const [tradeVisible, setTradeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTradeVisible(true);
    });

    if (tradeRef.current) observer.observe(tradeRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= FAQ ================= */
  const faqRef = useRef(null);
  const [faqVisible, setFaqVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFaqVisible(true);
    });

    if (faqRef.current) observer.observe(faqRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "How do I start learning to trade if I have zero knowledge?",
      answer: "Start with basics like market structure, risk management, and demo accounts.",
    },
    {
      question: "Where can I find daily forex market analysis?",
      answer: "Follow trusted platforms, blogs, and financial news portals.",
    },
    {
      question: "What markets do you cover?",
      answer: "Forex, crypto, indices, commodities, and economic events.",
    },
    {
      question: "Do you provide signals?",
      answer: "We focus on education and analysis.",
    },
    {
      question: "Is risk management important?",
      answer: "It is the MOST important part.",
    },
    {
      question: "Who manages investments?",
      answer: "You manage your trades — we provide tools.",
    },
  ];


  //Learn
  const learnRef = useRef(null);
  const [learnVisible, setLearnVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLearnVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (learnRef.current) observer.observe(learnRef.current);

    return () => observer.disconnect();
  }, []);


  return (

    <>
      <section className="hero">

        {/* SLIDER */}
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {desktopImages.map((img, index) => (
            <div className="slide" key={index}>

              {/* 🔥 RESPONSIVE IMAGE */}
              <picture>
                {/* MOBILE */}
                <source
                  media="(max-width: 768px)"
                  srcSet={mobileImages[index]}
                />

                {/* DESKTOP */}
                <img
                  src={img}
                  alt="Trading Background"
                />
              </picture>

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
        {desktopImages.map((_, index) => (
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
        {/* LEFT IMAGE */}
        <div className={`about-image-frame ${aboutVisible ? "show-left" : ""}`}>
          <img src={about} alt="About Us" />
        </div>

        {/* RIGHT CONTENT */}
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

      <section className="learn-section" ref={learnRef}>
        <div className="learn-bg"></div>
        <div className="learn-overlay"></div>

        <div className={`learn-content ${learnVisible ? "show" : ""}`}>
          <h2>
            Learn and trade what you <br />
            want. When you want.
          </h2>

          <p>
            Improve your strategy and become a more confident trader with expert
            market analysis, advanced trading tools and comprehensive educational materials.
          </p>

          <button className="learn-btn1">START TRADING</button>
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


      <section
        className={`dna-section ${dnaVisible ? "show-dna" : ""}`}
        ref={dnaRef}
      >
        <div className="dna-container">

          {/* LEFT IMAGE */}
          <div className={`dna-image ${dnaVisible ? "show-left" : ""}`}>
            <img src={BuyAndSell} alt="Trading DNA" />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`dna-content ${dnaVisible ? "show-right" : ""}`}>
            <h2>Precision at the core of every trade</h2>

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


      <section
        className={`why-section ${whyVisible ? "show-why" : ""}`}
        ref={whyRef}
      >
        <div className="why-header">
          <div className="tag">WHY CHOOSE US</div>
          <h2>
            What Makes Us <span>Different</span>
          </h2>

          <p>
            We deliver practical trading knowledge based on real market behavior, helping traders gain confidence and make smarter decisions.
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
          <div className={`trade-left ${tradeVisible ? "animate-left" : ""}`}>
            <h2>Transforming Trading since 2005</h2>

            <p>
              Transforming trading is more than just a mission statement.
              It is embedded in everything we do. We build scalable,
              sustainable and reliable financial technology that always
              puts the trader first.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`trade-right ${tradeVisible ? "animate-right" : ""}`}>
            <img src={markettrade} alt="Trading Visual" />
          </div>

        </div>
      </section>

      <section className="faq-section" ref={faqRef}>
        <div className="faq-container">

          {/* LEFT */}
          <div className={`faq-left ${faqVisible ? "fade-left" : ""}`}>
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
          <div className={`faq-right ${faqVisible ? "fade-right" : ""}`}>
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

      <section className="testimonials-section">

        {/* 🔷 IMAGE COLLAGE */}
        <div className="collage">

          {/* LEFT SIDE */}
          <div className="col small">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" />
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
          </div>

          <div className="col tall">
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
          </div>

          <div className="col tall">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" />
          </div>

          <div className="col tall">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
          </div>

          {/* RIGHT SIDE */}
          <div className="col tall">
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
          </div>

          <div className="col small">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
          </div>

        </div>

        {/* 🔷 HEADING */}
        <div className="heading">
          <span className="tag">Testimonials</span>
          <h2>
            Trusted by creatives and leaders <br />
            <span>from various industries</span>
          </h2>
        </div>

        {/* 🔷 TESTIMONIALS */}
        <div className="testimonial-cards1">

          <div className="card1">
            <div className="stars">★★★★★</div>
            <p>
              "WorkNook makes finding a coworking space so easy! I can book a desk in minutes and get straight to work. Highly recommend!"
            </p>
            <div className="user">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" />
              <div>
                <h4>Joao M.</h4>
                <span>Startup Founder</span>
              </div>
            </div>
          </div>

          <div className="card1">
            <div className="stars">★★★★★</div>
            <p>
              "Our team needed a flexible meeting space, and WorkNook delivered. The process was smooth, and the space was exactly what we needed!"
            </p>
            <div className="user">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" />
              <div>
                <h4>Bruno K.</h4>
                <span>UX Designer</span>
              </div>
            </div>
          </div>

          <div className="card1">
            <div className="stars">★★★★★</div>
            <p>
              "I love the variety of spaces available! Whether I need a quiet spot or a collaborative space, WorkNook always has the perfect option."
            </p>
            <div className="user">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" />
              <div>
                <h4>Lais A.</h4>
                <span>Digital Marketer</span>
              </div>
            </div>
          </div>

        </div>

      </section>

    </>
  );
};

export default Home;