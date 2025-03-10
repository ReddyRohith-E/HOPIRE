import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "/Logo.png";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaLinkedin,
	FaInstagram,
	FaGithub,
	FaFacebook,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	const handleMailClick = () => {
		window.location.href = "mailto:hopiretech@gmail.com";
	};

	const handlePhoneClick = () => {
		window.location.href = "tel:+91 9398983918";
	};

	const handleLocClick = () => {
		window.open("https://maps.app.goo.gl/ovy961XVPHQeHqU28", "_blank");
	};
	return (
		<footer className="footer">
			<div className="container">
				<div className="main-content">
					<div className="footer-logo">
						<img src={logo} alt="logo" />
						<div className="header-section">
							<h2>
								Have a project in mind? Let{"'"}s Build
								Something Amazing Together.
							</h2>
							<p>Get in Touch!</p>
						</div>
					</div>
					<div className="contact-grid">
						<div className="contact-item" onClick={handleLocClick}>
							<FaMapMarkerAlt />
							<span>
								1-195, MBT Road, Angallu, Kurabalakota, Andhra
								Pradesh
							</span>
						</div>
						<div className="myrow">
							<div
								className="contact-item"
								onClick={handlePhoneClick}
							>
								<FaPhoneAlt />
								<span>9398983918</span>
							</div>
							<div
								className="contact-item"
								onClick={handleMailClick}
							>
								<FaEnvelope />
								<span>hopiretech@gmail.com</span>
							</div>
						</div>
						<div className="nav-social">
							<div className="social-media">
								<span>Social Media</span>
								<a
									href="https://www.linkedin.com/company/hopire-tech/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin />
								</a>
								<a
									href="https://www.instagram.com/hopire_tech_solutions/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaInstagram />
								</a>
								<a
									href="https://github.com/Hopire"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub />
								</a>
								<a
									href="https://www.facebook.com/share/1SWXyJ3euA/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaFacebook />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="copyright">
					<nav className="navigation">
						<ul>
							<li>
								<ScrollLink
									to="about"
									smooth={true}
									duration={300}
									offset={-80}
									spy={true}
								>
									ABOUT US
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="contact"
									smooth={true}
									duration={300}
									offset={-80}
									spy={true}
								>
									CONTACT US
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="services"
									smooth={true}
									duration={300}
									offset={-80}
									spy={true}
								>
									SERVICES
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="portfolio"
									smooth={true}
									duration={300}
									offset={-80}
									spy={true}
								>
									PORTFOLIO
								</ScrollLink>
							</li>
						</ul>
					</nav>
					<a
						href="./FiLLiP_Approval Letter_M29636630.pdf"
						target="_blank"
					>
						View LLP Approval Document
					</a>
					{/* <p>Copyright © 2025 • Hopire Tech Solutions LLP</p> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
