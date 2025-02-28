import { useRef } from "react";
import "./AboutUs.css";
import aboutUsImage from "./aboutUs.png";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const AboutUs = () => {
	const whoWeAreRef = useRef(null);
	const imageRef = useRef(null);
	const whyChooseUsRef = useRef(null);
	const visionRef = useRef(null);
	const missionRef = useRef(null);

	const whoWeAreVisible = useIntersectionObserver(whoWeAreRef, {
		threshold: 0.2,
	});
	const imageVisible = useIntersectionObserver(imageRef, { threshold: 0.2 });
	const whyChooseUsVisible = useIntersectionObserver(whyChooseUsRef, {
		threshold: 0.2,
	});
	const visionVisible = useIntersectionObserver(visionRef, {
		threshold: 0.2,
	});
	const missionVisible = useIntersectionObserver(missionRef, {
		threshold: 0.2,
	});

	return (
		<div className="about-us">
			<h1>About Us</h1>
			<div className="about-us-container">
				<div className="top">
					<div
						ref={whoWeAreRef}
						id="who-we-are"
						className={`about-us-section ${
							whoWeAreVisible ? "visible" : ""
						}`}
					>
						<div className="title">Who We Are</div>
						<p>
							HOPIRE TECH SOLUTIONS is a student-led digital
							consultancy turning ideas into impactful web
							solutions. Our team specializes in website
							development, UI/UX design, and web applications,
							crafting seamless and visually striking digital
							experiences. With successful projects we help
							businesses, startups, and institutions enhance their
							digital presence.
						</p>
					</div>
					<div
						ref={imageRef}
						className={`about-us-image ${
							imageVisible ? "visible" : ""
						}`}
					>
						<img src={aboutUsImage} alt="" />
					</div>
					<div
						ref={whyChooseUsRef}
						id="why-choose-us"
						className={`about-us-section ${
							whyChooseUsVisible ? "visible" : ""
						}`}
					>
						<div className="title">Why Choose Us</div>
						<p>
							At HOPIRE TECH SOLUTIONS, we believe in merging
							creativity with technology to build digital
							experiences that stand out. As a dynamic team of
							young professionals, we bring fresh ideas, modern
							tech, and agile execution to every project. Our
							commitment to quality, efficiency, and innovation
							ensures that we create digital experiences that
							truly stand out.
						</p>
					</div>
				</div>
				<div
					ref={visionRef}
					id="vision"
					className={`about-us-section ${
						visionVisible ? "visible" : ""
					}`}
				>
					<div className="title">Vision</div>
					<p>
						To lead digital transformation by creating innovative,
						user-centric web solutions while fostering a community
						of skilled developers who push the boundaries of
						technology. By continuously evolving and adapting to the
						latest industry trends, we aspire to set new standards
						in website design and development, ensuring that our
						solutions are not only aesthetically pleasing but also
						highly functional and scalable.
					</p>
				</div>
				<div
					ref={missionRef}
					id="mission"
					className={`about-us-section ${
						missionVisible ? "visible" : ""
					}`}
				>
					<div className="title">Mission</div>
					<p>
						To design, develop, and deploy websites that bring ideas
						to life, merging creativity with technology for seamless
						user experiences. We strive to bridge the gap between
						creativity and technology by delivering digital
						solutions that enhance engagement, functionality, and
						overall user experience. We strive to empower young
						talent, nurture innovation, and build impactful digital
						solutions that drive success.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
