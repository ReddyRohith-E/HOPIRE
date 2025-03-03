import "./hero.css";
import { Element, scroller } from "react-scroll";
import heroBackground from "/hero-background.jpeg";

const Hero = () => {

    const handleGetStartedClick = () => {
        scroller.scrollTo('contact', {
            duration: 300,
            delay: 0,
            offset: -80,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <Element name="home">
            <div className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <h1>Hopire</h1>
                <h2>Tech Solutions</h2>
                <div className="disturbance"></div>
                <div className="overlay"></div>
                <div className="circle"></div>
                <div className="triangle"></div>
                <div className="stick"></div>
                <button onClick={handleGetStartedClick}>Get Started</button>
            </div>
        </Element>
    );
};

export default Hero;