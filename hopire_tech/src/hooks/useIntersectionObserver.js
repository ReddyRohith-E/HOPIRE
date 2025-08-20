import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options = {}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, options);

		const currentElement = ref.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [ref, options]);

	return isVisible;
};

export default useIntersectionObserver;
