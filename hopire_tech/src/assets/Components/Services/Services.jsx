import "./Services.css";

const Services = () => {
	return (
		<div className="services">
			<h1>Our Services</h1>
			<div className="services_container">
				<div className="service">
					<h2 className="service-title">Website Development</h2>
					<p className="service-description">
						Custom, responsive, scalable and visually appealing
						websites.
					</p>
					<div className="service-icon"><img src="/icon1.svg" alt="Website Development Icon" /></div>
				</div>
				<div className="service">
					<h2 className="service-title">UI/UX Design</h2>
					<p className="service-description">
						User-friendly and engaging designs using Figma.
					</p>
					<div className="service-icon"><img src="/icon2.svg" alt="UI/UX Design Icon" /></div>
				</div>
				<div className="service">
					<h2 className="service-title">Web Applications</h2>
					<p className="service-description">
						Powerful Full stack, data-driven web apps tailored to
						your needs.
					</p>
					<div className="service-icon"><img src="/icon3.svg" alt="Web Applications Icon" /></div>
				</div>
			</div>
		</div>
	);
};

export default Services;
