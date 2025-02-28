import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import "./Navbar.css";
import logo from "/logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      setActiveSection(to);
    });

    Events.scrollEvent.register("end", function(to, element) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <header className={`navbar ${isOpen ? "nav-open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Hopire</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav>
        <ul>
          <li className={activeSection === "home" ? "active" : ""}>
            <ScrollLink to="home" smooth={true} duration={300} offset={-80} spy={true} onClick={() => setIsOpen(false)}>Home</ScrollLink>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <ScrollLink to="about" smooth={true} duration={300} offset={-80} spy={true} onClick={() => setIsOpen(false)}>About Us</ScrollLink>
          </li>
          <li className={activeSection === "services" ? "active" : ""}>
            <ScrollLink to="services" smooth={true} duration={300} offset={-80} spy={true} onClick={() => setIsOpen(false)}>Services</ScrollLink>
          </li>
          <li className={activeSection === "portfolio" ? "active" : ""}>
            <ScrollLink to="portfolio" smooth={true} duration={300} offset={-80} spy={true} onClick={() => setIsOpen(false)}>Portfolio</ScrollLink>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <ScrollLink to="contact" smooth={true} duration={300} offset={-80} spy={true} onClick={() => setIsOpen(false)}>Contact Us</ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
