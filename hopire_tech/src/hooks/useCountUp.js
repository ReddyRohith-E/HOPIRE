import { useState, useEffect } from "react";

const useCountUp = (end, duration = 500, start = 0) => {
	const [count, setCount] = useState(start);

	useEffect(() => {
		let startTime = null;
		const animate = (currentTime) => {
			if (!startTime) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1);

			setCount(Math.floor(progress * (end - start) + start));

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		requestAnimationFrame(animate);
	}, [end, duration, start]);

	return count;
};

export default useCountUp;
