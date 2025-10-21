import React from "react";
import BG from "/src/assets/bg.svg";
import Logo from "/src/assets/logo.svg";
import Data from "./Hero.json";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <header className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
        <img
          src={Logo}
          alt="Logo"
          className="w-30 h-auto mt-2 mb-4 md:w-24 lg:w-30"
        />
        <div className="border-t border-white w-screen mb-3 md:mb-3" />

        <nav className="font-figtree w-full max-w-6xl">
          <ul className="flex justify-center space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-12">
            {Data.navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  className={`${
                    item.isBold ? "font-bold" : "font-light"
                  } text-white hover:font-medium text-sm sm:text-base md:text-md whitespace-nowrap`}
                >
                  {item.name}
                </a>
                {item.isActive && (
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="flex justify-center items-start px-4 sm:px-6 lg:px-8 mt-48 md:mt-40 lg:mt-40">
        <div className="max-w-6xl w-full">
          <h1
            style={{
              fontFamily: "'Bona Nova', serif",
              fontWeight: 400,
            }}
            className="font-bona-nova font-normal text-white text-center md:text-left max-w-2xl mx-auto md:mx-0 lg:mx-0 text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight"
          >
            {Data.heroContent.tagline}
          </h1>
          <p className="font-figtree font-light text-white text-center md:text-left max-w-2xl mx-auto md:ml-16 lg:ml-24 xl:ml-130 mt-4 md:mt-4 lg:mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
            {Data.heroContent.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
