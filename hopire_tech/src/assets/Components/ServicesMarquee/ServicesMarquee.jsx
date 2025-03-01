import "./services.css";

const ServicesMarquee = () => {
	return (
		<div className="services-marquee">
			<ul className="scrolling-text">
				<li>
					<span>ANIMATIONS</span>
				</li>
				<li>
					<img src="/star.svg" alt="" />
				</li>
				<li>
					<span>WEBSITE DEVELOPMENT</span>
				</li>
				<li>
					<img src="/star.svg" alt="" />
				</li>
				<li>
					<span>UI/UX DESIGN</span>
				</li>
				<li>
					<img src="/star.svg" alt="" />
				</li>
				<li>
					<span>WEB APPLICATION</span>
				</li>
			</ul>
		</div>
	);
};

export default ServicesMarquee;
