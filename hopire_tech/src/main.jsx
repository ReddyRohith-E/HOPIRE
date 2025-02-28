import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./assets/Components/Navbar/Navbar.jsx";
import "./index.css";
import Footer from "./assets/Components/Footer/Footer.jsx";
import ClientTestimonials from "./assets/Components/Testimonials/ClientTestimonials.jsx";
import Hero from "./assets/Components/Hero/Hero.jsx";
import Portfolio from "./assets/Components/Portfolio/Portfolio.jsx";
import AboutUs from "./assets/Components/AboutUs/AboutUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="testimonials">
        <ClientTestimonials />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);