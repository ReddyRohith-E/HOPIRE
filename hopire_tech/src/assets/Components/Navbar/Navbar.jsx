import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={`navbar ${isOpen ? "nav-open" : ""}`}>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<button className="hamburger" onClick={toggleMenu}>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>
			<nav>
				<ul>
					<li>
						<Link
							to="/"
							className="active"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={() => setIsOpen(false)}>
							About Us
						</Link>
					</li>
					<li>
						<Link to="/services" onClick={() => setIsOpen(false)}>
							Services
						</Link>
					</li>
					<li>
						<Link to="/portfolio" onClick={() => setIsOpen(false)}>
							Portfolio
						</Link>
					</li>
					<li>
						<Link to="/contact" onClick={() => setIsOpen(false)}>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
