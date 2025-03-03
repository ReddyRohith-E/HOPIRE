import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const ContactUs = () => {
    const contactRef = useRef(null);
    const contactVisible = useIntersectionObserver(contactRef, {
        threshold: 0.2,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        const storedFormData = localStorage.getItem("contactFormData");
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newData = { ...prevData, [name]: value };
            localStorage.setItem("contactFormData", JSON.stringify(newData));
            return newData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_email: "hopiretech@gmail.com",
            message: formData.message,
        };
        
        emailjs.send(
            "service_pfzqf7o",
            "template_i6tk21h",
            emailParams,
            "f-V4CQWLx0WaRG_3S"

        ).then((response) => {
                console.log("Email sent successfully:", response.status, response.text);
                alert("Email sent successfully. We will get back to you soon.");
                localStorage.removeItem("contactFormData");
                setFormData({ name: "", email: "", message: "" });
            }).catch((err) => {
                console.error("Failed to send email:", err);
                alert("Failed to send email. Please try again later.");
            });
    };

return (
    <div className="contact-us" ref={contactRef}>
        <h1>Contact Us</h1>
        <div className={`contact-us-container ${contactVisible ? "visible" : ""}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
);
};

export default ContactUs;