import { useRef } from "react";
import "./keyAchievements.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import useCountUp from "../../../hooks/useCountUp";

const KeyAchievements = () => {
	const containerRef = useRef(null);
	const isVisible = useIntersectionObserver(containerRef, { threshold: 0.2 });

	const projectCount = useCountUp(isVisible ? 5 : 0);
	const clientCount = useCountUp(isVisible ? 5 : 0);
	const feedbackCount = useCountUp(isVisible ? 95 : 0);
	const visitorCount = useCountUp(isVisible ? 1000 : 0);

	return (
		<div className="keyAchievements">
			<h1>Key Achievements</h1>
			<div ref={containerRef} className="keyAchievements__container">
				<div className="keyAchievements__card">
					<h2>{projectCount}+</h2>
					<p>Projects Completed</p>
				</div>
				<div className="keyAchievements__card">
					<h2>{clientCount}+</h2>
					<p>Satisfied Clients</p>
				</div>
				<div className="keyAchievements__card">
					<h2>{feedbackCount}%</h2>
					<p>Positive Feedback</p>
				</div>
				<div className="keyAchievements__card">
					<h2>{visitorCount}+</h2>
					<p>Website Visitors</p>
				</div>
			</div>
		</div>
	);
};

export default KeyAchievements;
