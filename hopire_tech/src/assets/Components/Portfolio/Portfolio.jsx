import React from "react";
import { Element } from "react-scroll";
import './portfolio.css';

const Portfolio = () => {
	// Portfolio data
	const portfolioItems = [
		{
			id: 1,
			title: "Emofelix",
			imageUrl: "/emofelix_website.png",
			url: "https://emofelix.in",
			description:
				"Emofelix is a heartfelt digital platform that helps users reconnect emotionally by creating AI companions modeled after loved ones parents, friends, or grandparents. Through healing conversations and memory-sharing, it offers comfort, emotional support, and a sense of presence. Emofelix empowers users to feel less lonely, more understood, and emotionally uplifted anytime, anywhere.",
			buttonColor: "var(--secondary-color)",
			borderColor: "var(--quaternary-color)",
			titleColor: "var(--secondary-color)",
			buttonFontColor: "#001136",
			fontColor: "#ffffff",
		},
		{
			id: 2,
			title: "Green Valley School",
			imageUrl:"/green_valley_school.png",
			url: "https://green-valley-school-mpl.netlify.app/", 
			description:
				"The Green Valley School website is a digital platform that provides comprehensive information about the school's mission, values, and educational programs. It features details about the curriculum, faculty, and extracurricular activities, aiming to foster a sense of community and engagement among students, parents, and educators.",
			buttonColor: "var(--secondary-color)",
			borderColor: "var(--quaternary-color)",
			titleColor: "var(--secondary-color)",
			buttonFontColor: "#001136",
			fontColor: "#ffffff",
		},
		{
			id: 3,
			title: "MITS Foundation",
			imageUrl: "/mits_foundation.jpg",
			url: "https://mitsfoundation.org",
			description:
				"The MITS Foundation website serves as a comprehensive platform detailing the institution's mission, values, and initiatives. It offers insights into various programs and provides resources for students and stakeholders. The site emphasizes the foundation's commitment to education and community development.",
			buttonColor: "var(--secondary-color)",
			borderColor: "var(--quaternary-color)",
			titleColor: "var(--secondary-color)",
			buttonFontColor: "#001136",
			fontColor: "#ffffff",
		},
		{
			id: 4,
			title: "ASHV 2k25",
			imageUrl: "/ashv_website.jpg", 
			url: "https://ashv2k.in/",
			description:
				"The ASHV website showcases a dynamic two-day national level techno-cultural-sports fest. It highlights various events, including technical and non-technical competitions, sports showdowns, diverse food stalls, and engaging fun games. The site invites visitors to experience the excitement and camaraderie of the fest.",
			buttonColor: "var(--primary-color)",
			borderColor: "var(--tertiary-color)",
			titleColor: "var(--primary-color)",
			buttonFontColor: "#00EAFA",
			fontColor: "#001136",
		},
		{
			id: 5,
			title: "INNOSPARK 1.0",
			imageUrl: "/innospark_website.jpg",
			url: "https://innospark-2024.netlify.app/",
			description:
				"The INNOSPARK 1.0 website details a national-level hackathon organized by the Department of CSE at Madanapalle Institute of Technology & Science. It provides information on event schedules, registration process, prize details, and suggested problem statements, encouraging innovation and real-world problem-solving skills among participants.",
			buttonColor: "var(--primary-color)",
			borderColor: "var(--tertiary-color)",
			titleColor: "var(--primary-color)",
			buttonFontColor: "#00EAFA",
			fontColor: "#001136",
		},
		{
			id: 6,
			title: "MITS Web Club",
			imageUrl: "/mits_webclub.jpg", 
			url: "https://mitswebclub.netlify.app/",
			description:
				"The MITS Web Club Website is a digital hub designed to showcase the club's activities, projects, events and workshops. It serves as an interactive platform for members to collaborate, learn, and share their knowledge in web development and design. The site aims to foster a community of tech enthusiasts and creators.",
			buttonColor: "var(--primary-color)",
			borderColor: "var(--tertiary-color)",
			titleColor: "var(--primary-color)",
			buttonFontColor: "#00EAFA",
			fontColor: "#001136",
		},
	];

	const styles = {
		container: {
			width: "100%",
			padding: "40px 20px",
			boxSizing: "border-box",
			backgroundColor: "var(--primary-color)",
		},
		heading: {
			fontSize: "42px",
			fontWeight: "bold",
			color: "var(--secondary-color)",
			textAlign: "center",
			marginBottom: "48px",
		},
		portfolioGrid: {
			display: "grid",
			gridTemplateColumns: "repeat(2, 1fr)",
			gap: "32px",
			maxWidth: "1200px",
			margin: "0 auto",
		},
		portfolioCard: (item) => ({
			backgroundColor: item.borderColor,
			borderRadius: "12px",
			overflow: "hidden",
			display: "flex",
			flexDirection: "column",
			height: "100%",
		}),
		cardTitle: (item) => ({
			fontSize: "32px",
			fontWeight: "bold",
			color: item.titleColor,
			padding: "24px 32px",
		}),
		imageContainer: {
			padding: "0 32px",
		},
		portfolioImage: {
			width: "100%",
			borderRadius: "8px",
			objectFit: "cover",
			aspectRatio: "16/8",
		},
		cardDescription: (item) => ({
			padding: "24px 32px",
			fontSize: "14px",
			lineHeight: "1.6",
			color: item.fontColor,
			flex: "1",
			fontWeight: "600",
		}),
		buttonContainer: {
			padding: "0 32px 24px 32px",
		},
		knowMoreButton: (item) => ({
			backgroundColor: item.buttonColor,
			color: item.buttonFontColor,
			padding: "12px 24px",
			borderRadius: "8px",
			border: "none",
			fontSize: "16px",
			fontWeight: "500",
			cursor: "pointer",
			display: "inline-block",
			textDecoration: "none",
			zindex:"100",
		}),
		// For responsive design
		"@media (max-width: 768px)": {
			portfolioGrid: {
				gridTemplateColumns: "1fr",
			},
		},
	};

	return (
		<Element name="portfolio">
			<div style={styles.container}>
				<h2 style={styles.heading}>Our Portfolio</h2>

				<div style={styles.portfolioGrid} className="portfolio-grid">
					{portfolioItems.map((item) => (
						<div key={item.id} style={styles.portfolioCard(item)}>
							<h3 style={styles.cardTitle(item)}>{item.title}</h3>

							<div style={styles.imageContainer}>
								<img
									src={item.imageUrl}
									alt={item.title}
									style={styles.portfolioImage}
								/>
							</div>

							<p style={styles.cardDescription(item)}>
								{item.description}
							</p>

							<div style={styles.buttonContainer}>
								<a
									href={`${item.url}`} target="_blank"
									style={styles.knowMoreButton(item)}
									className="know-more-button"
								>
									Know More
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</Element>
	);
};

export default Portfolio;
