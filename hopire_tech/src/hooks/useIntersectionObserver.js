import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options = {}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, options);

		const currentRef = ref.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [ref, options]);

	return isVisible;
};

export default useIntersectionObserver;
