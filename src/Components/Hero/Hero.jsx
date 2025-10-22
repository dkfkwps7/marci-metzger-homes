import React from "react";
import BG from "/src/assets/bg.svg";
import Logo from "/src/assets/logo.svg";
import MM from "/src/assets/marci_metzger.svg";
import Img1 from "/src/assets/img1.svg";
import Img2 from "/src/assets/img2.svg";
import Img3 from "/src/assets/img3.svg";
import Img4 from "/src/assets/img4.svg";
import Img5 from "/src/assets/img5.svg";
import Img6 from "/src/assets/img6.svg";
import Img7 from "/src/assets/img7.svg";
import Img8 from "/src/assets/img8.svg";
import Img9 from "/src/assets/img9.svg";
import Img10 from "/src/assets/img10.svg";
import Img11 from "/src/assets/img11.svg";
import Logo1 from "/src/assets/logo1.svg";
import Logo2 from "/src/assets/logo2.svg";
import Logo3 from "/src/assets/logo3.svg";
import Logo4 from "/src/assets/logo4.svg";
import Data from "./Hero.json";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${BG})` }}>
        <header className="hero-header">
          <img src={Logo} alt="Logo" className="hero-logo" />
          <div className="hero-border" />

          <nav className="hero-nav">
            <ul className="hero-nav-list">
              {Data.navItems.map((item) => (
                <li key={item.id} className="hero-nav-item">
                  <a
                    href={item.href}
                    className={`hero-nav-link ${
                      item.isBold ? "font-bold" : "font-light"
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.isActive && <div className="hero-nav-indicator"></div>}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">{Data.heroContent.tagline}</h1>
            <p className="hero-description">{Data.heroContent.description}</p>
          </div>
        </section>
      </div>

      <section
        className="new-section"
        style={{ backgroundColor: "#1C1F35", minHeight: "100vh" }}
      >
        <div className="new-section-content-wrapper">
          <div className="text-content">
            <p className="greeting">{Data.aboutSection.greeting}</p>
            <h2 className="name">{Data.aboutSection.name}</h2>
            <p className="subtitle">{Data.aboutSection.subtitle}</p>
            <p className="description">{Data.aboutSection.description}</p>
            <div className="cta-wrapper">
              <div className="phone-number">
                <svg
                  className="phone-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span>{Data.aboutSection.phone}</span>
              </div>
              <button className="cta-button">
                {Data.aboutSection.callToAction}
              </button>
            </div>
          </div>
          <img src={MM} alt="Marci Metzger" className="new-section-image" />
        </div>
      </section>

      <section className="get-it-sold-section">
        <h2 className="get-it-sold-header">{Data.header}</h2>
        <div className="get-it-sold-divider" />

        <div className="get-it-sold-grid">
          {Data.contentSections.map((section, index) => (
            <div key={index} className="get-it-sold-card">
              <img
                src={index === 0 ? Img1 : index === 1 ? Img2 : Img3}
                alt={section.title}
                className="get-it-sold-image"
              />
              <h3 className="get-it-sold-title">{section.title}</h3>
              <p className="get-it-sold-description">{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-content">
          <p className="search-header">{Data.searchSection.headerTitle}</p>
          <h2 className="search-title">{Data.searchSection.title}</h2>

          <div className="search-panel">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              {/* Row of selects/inputs generated from fields for layout; design-only values */}
              {Data.searchSection.fields.map((label, idx) => {
                const isPrice = /price/i.test(label);
                const id = `search-${label.replace(/\s+/g, "-").toLowerCase()}`;

                // Provide simple placeholder/options for design
                if (/location/i.test(label)) {
                  return (
                    <div key={id} className="form-field">
                      <label htmlFor={id} className="field-label">
                        {label}
                      </label>
                      <select
                        id={id}
                        className="select-input"
                        defaultValue="all"
                      >
                        <option value="all">All Locations</option>
                        <option value="1">Location 1</option>
                      </select>
                    </div>
                  );
                }

                if (/type/i.test(label)) {
                  return (
                    <div key={id} className="form-field">
                      <label htmlFor={id} className="field-label">
                        {label}
                      </label>
                      <select
                        id={id}
                        className="select-input"
                        defaultValue="all"
                      >
                        <option value="all">All Types</option>
                        <option value="house">House</option>
                      </select>
                    </div>
                  );
                }

                if (/sort/i.test(label)) {
                  return (
                    <div key={id} className="form-field">
                      <label htmlFor={id} className="field-label">
                        {label}
                      </label>
                      <select
                        id={id}
                        className="select-input"
                        defaultValue="newest"
                      >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                      </select>
                    </div>
                  );
                }

                if (/bedrooms/i.test(label) || /baths?/i.test(label)) {
                  return (
                    <div key={id} className="form-field">
                      <label htmlFor={id} className="field-label">
                        {label}
                      </label>
                      <select
                        id={id}
                        className="select-input"
                        defaultValue="any"
                      >
                        <option value="any">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                      </select>
                    </div>
                  );
                }

                if (isPrice) {
                  const placeholder = /min/i.test(label) ? "$0" : "$1,000,000";
                  return (
                    <div key={id} className="form-field">
                      <label htmlFor={id} className="field-label">
                        {label}
                      </label>
                      <input
                        id={id}
                        className="text-input"
                        placeholder={placeholder}
                      />
                    </div>
                  );
                }

                // Fallback
                return (
                  <div key={id} className="form-field">
                    <label htmlFor={id} className="field-label">
                      {label}
                    </label>
                    <select id={id} className="select-input" defaultValue="">
                      <option value="">Select {label}</option>
                    </select>
                  </div>
                );
              })}

              <div className="form-actions">
                <button type="button" className="search-button">
                  {Data.searchSection.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="logo-carousel-section">
        <div className="logo-carousel-container">
          <div className="logo-carousel-track">
            <div className="logo-carousel-item">
              <img src={Logo1} alt="Logo 1" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo2} alt="Logo 2" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo3} alt="Logo 3" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo4} alt="Logo 4" className="logo-carousel-image" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="logo-carousel-item">
              <img src={Logo1} alt="Logo 1" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo2} alt="Logo 2" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo3} alt="Logo 3" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo4} alt="Logo 4" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo1} alt="Logo 1" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo2} alt="Logo 2" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo3} alt="Logo 3" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo4} alt="Logo 4" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo1} alt="Logo 1" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo2} alt="Logo 2" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo3} alt="Logo 3" className="logo-carousel-image" />
            </div>
            <div className="logo-carousel-item">
              <img src={Logo4} alt="Logo 4" className="logo-carousel-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
