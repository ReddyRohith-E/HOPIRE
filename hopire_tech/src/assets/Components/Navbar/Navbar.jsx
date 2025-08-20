import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import "./Navbar.css";
import logo from "/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [scrollPosition, setScrollPosition] = useState(0);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	const handleSetActive = (to) => {
		setActiveSection(to);
	};

	useEffect(() => {
		// Register scroll events
		Events.scrollEvent.register("begin", handleSetActive);
		Events.scrollEvent.register("end", handleSetActive);

		// Initialize scrollSpy
		scrollSpy.update();

		// Add scroll listener for navbar transparency
		window.addEventListener("scroll", handleScroll);

		// Cleanup
		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Update scroll spy when component mounts
	useEffect(() => {
		scrollSpy.update();
	}, []);

	const navbarOpacity = Math.max(1 - scrollPosition / 300, 0.7);

	return (
		<header
			className={`navbar ${isOpen ? "nav-open" : ""}`}
			style={{ backgroundColor: `rgba(0, 17, 54, ${navbarOpacity})`, boxShadow: `0 0 10px 10px rgba(0, 17, 54, ${navbarOpacity})` }}
		>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<button
				className="hamburger"
				onClick={toggleMenu}
				style={{ transition: "transform 0.3s ease" }}
			>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>
			<nav>
				<ul>
					<li className={activeSection === "home" ? "active" : ""}>
						<ScrollLink
							to="home"
							smooth={true}
							duration={300}
							offset={-80}
							spy={true}
							activeClass="active"
							onSetActive={handleSetActive}
							onClick={() => setIsOpen(false)}
						>
							Home
						</ScrollLink>
					</li>
					<li className={activeSection === "about" ? "active" : ""}>
						<ScrollLink
							to="about"
							smooth={true}
							duration={300}
							offset={-80}
							spy={true}
							activeClass="active"
							onSetActive={handleSetActive}
							onClick={() => setIsOpen(false)}
						>
							About Us
						</ScrollLink>
					</li>
					<li
						className={activeSection === "services" ? "active" : ""}
					>
						<ScrollLink
							to="services"
							smooth={true}
							duration={300}
							offset={-80}
							spy={true}
							activeClass="active"
							onSetActive={handleSetActive}
							onClick={() => setIsOpen(false)}
						>
							Services
						</ScrollLink>
					</li>
					<li
						className={
							activeSection === "portfolio" ? "active" : ""
						}
					>
						<ScrollLink
							to="portfolio"
							smooth={true}
							duration={300}
							offset={-80}
							spy={true}
							activeClass="active"
							onSetActive={handleSetActive}
							onClick={() => setIsOpen(false)}
						>
							Portfolio
						</ScrollLink>
					</li>
					<li className={activeSection === "contact" ? "active" : ""}>
						<ScrollLink
							to="contact"
							smooth={true}
							duration={300}
							offset={-80}
							spy={true}
							activeClass="active"
							onSetActive={handleSetActive}
							onClick={() => setIsOpen(false)}
						>
							Contact Us
						</ScrollLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
