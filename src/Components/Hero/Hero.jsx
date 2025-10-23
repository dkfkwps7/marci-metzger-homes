import React from "react";
const { useState, useEffect } = React;
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
import LogoLoop from "../Animations/LogoLoop/LogoLoop";

const logoData = [
  { src: Logo1, alt: "Logo 1" },
  { src: Logo2, alt: "Logo 2" },
  { src: Logo3, alt: "Logo 3" },
  { src: Logo4, alt: "Logo 4" },
];

const Hero = () => {
  const galleryImages = [
    { src: Img5, alt: "Gallery Image 5" },
    { src: Img6, alt: "Gallery Image 6" },
    { src: Img7, alt: "Gallery Image 7" },
    { src: Img8, alt: "Gallery Image 8" },
    { src: Img9, alt: "Gallery Image 9" },
    { src: Img10, alt: "Gallery Image 10" },
    { src: Img11, alt: "Gallery Image 11" },
  ];

  const [currentGalleryIndex, setCurrentGalleryIndex] = React.useState(0);

  // Auto-advance slideshow every 20 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  const handleGalleryNav = (direction) => {
    if (direction === "next") {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    } else {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };
  return (
    <>
      <div id="home" className="hero" style={{ backgroundImage: `url(${BG})` }}>
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
        id="about"
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

      <section className="logo-loop-section">
        <div
          style={{
            height: "190px",
            alignContent: "center",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <LogoLoop
            logos={logoData}
            speed={80}
            direction="left"
            logoHeight={120}
            gap={170}
            pauseOnHover={false}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Partner logos"
          />
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <h2 className="gallery-header">PHOTO GALLERY</h2>
        <div className="gallery-divider" />

        <div className="gallery-container">
          <button
            className="gallery-control gallery-prev"
            onClick={() => handleGalleryNav("prev")}
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="gallery-image-wrapper">
            <img
              src={galleryImages[currentGalleryIndex].src}
              alt={galleryImages[currentGalleryIndex].alt}
              className="gallery-image"
            />
          </div>

          <button
            className="gallery-control gallery-next"
            onClick={() => handleGalleryNav("next")}
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="gallery-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${
                  index === currentGalleryIndex ? "active" : ""
                }`}
                onClick={() => setCurrentGalleryIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2 className="services-header">{Data.servicesSection.headerTitle}</h2>
        <div className="services-divider" />

        <div className="services-grid">
          {Data.servicesSection.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <h2 className="contact-header">CONTACT US</h2>
              <div className="contact-divider" />

              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label htmlFor="contact-name" className="contact-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="contact-input"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="contact-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="contact-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="contact-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="contact-textarea"
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-button">
                  Send Message
                </button>
              </form>

              <div className="social-whatsapp-wrapper">
                <div className="social-media-section">
                  <h3 className="social-header">Connect With Us</h3>
                  <div className="social-buttons">
                    <a
                      href="https://www.facebook.com/MarciHomes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button facebook"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/marciandlauren_nvrealtors/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button instagram"
                      aria-label="Instagram"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/marci-metzger-30642496/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button linkedin"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button yelp"
                      aria-label="Yelp"
                    >
                      <svg viewBox="0 0 384 512" fill="currentColor">
                        <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/14259412560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="visit-info-wrapper">
              <h2 className="visit-header">VISIT US</h2>
              <div className="visit-divider" />

              <div className="office-details">
                <div className="office-info">
                  <h3 className="office-name">Marci Metzger</h3>
                  <p className="office-company">THE RIDGE REALTY GROUP</p>

                  <div className="info-item">
                    <svg
                      className="info-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p>
                      3190 HW-160, Suite F Pahrump, Nevada 89048 United States
                    </p>
                  </div>

                  <div className="info-item">
                    <svg
                      className="info-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    <a href="tel:+12069196886" className="phone-link">
                      (206) 919-6886
                    </a>
                  </div>
                </div>

                <div className="office-hours">
                  <h4 className="hours-title">Office Hours</h4>
                  <div className="hours-grid">
                    <div className="hours-row">
                      <span className="day">Monday - Sunday</span>
                      <span className="time">08:00 am – 07:00 pm</span>
                    </div>
                  </div>
                  <p className="hours-note">
                    Appointments outside office hours available upon request.
                    Just call!
                  </p>
                </div>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.7891234567!2d-116.0!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiAxMTbCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  />
                  <a
                    href="https://www.google.com/maps/dir//3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-button"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="luxury-footer">
        <div className="footer-content">
          <div className="footer-divider"></div>
          <div className="footer-main">
            <div className="footer-brand">
              <img
                src={Logo}
                alt="Marci Metzger Logo"
                className="footer-logo"
              />
            </div>

            <div className="footer-info">
              <div className="footer-contact">
                <h4>Contact Information</h4>
                <p>3190 HW-160, Suite F</p>
                <p>Pahrump, Nevada 89048</p>
                <p className="footer-phone">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  (206) 919-6886
                </p>
              </div>

              <div className="footer-quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="footer-social-links">
                  <a
                    href="https://www.facebook.com/MarciHomes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/marciandlauren_nvrealtors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marci-metzger-30642496/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
