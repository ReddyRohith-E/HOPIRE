import "./hero.css";
import { Element } from "react-scroll"; 
import heroBackground from "/hero-background.jpeg";

const Hero = () => {
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
            <button>Get Started</button>
        </div>
        </Element>
    );
};

export default Hero; 