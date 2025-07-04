import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar/Navbar.jsx";
import "./index.css";
import Footer from "./assets/Components/Footer/Footer.jsx";
import ClientTestimonials from "./assets/Components/Testimonials/ClientTestimonials.jsx";
import Hero from "./assets/Components/Hero/Hero.jsx";
import Portfolio from "./assets/Components/Portfolio/Portfolio.jsx";
import InternshipIntro from "./assets/Components/InternshipIntro/InternshipIntro.jsx";
import AboutUs from "./assets/Components/AboutUs/AboutUs.jsx";
import Team from "./assets/Components/Team/Team.jsx"
import ServicesMarquee from "./assets/Components/ServicesMarquee/ServicesMarquee.jsx";
import KeyAchievements from "./assets/Components/keyAchievements/keyAchievements.jsx";
import Services from "./assets/Components/Services/Services.jsx";
import ContactUs from "./assets/Components/ContactUs/ContactUs.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/team" element={<Team />} />
					<Route path="/" element={
						<>
						<Navbar />
						<div id="home">
							<Hero />
						</div>
						<div id="about">
							<AboutUs />
						</div>
						<ServicesMarquee />
						<KeyAchievements />
						<div id="services">
							<Services />
						</div>
						{/* Internship Intro Section just above Portfolio */}
						{/* <InternshipIntro /> */}
						<div id="portfolio">
							<Portfolio />
						</div>
						<div id="testimonials">
							<ClientTestimonials />
						</div>
						<div id="contact">
							<ContactUs />
						</div>
						<div id="footer">
							<Footer />
						</div>
					</>} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
