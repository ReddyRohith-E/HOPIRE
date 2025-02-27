import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'MITS',
      content: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim',
      date: 'May 8, 2020'
    },
    {
      id: 2,
      name: 'MITS',
      content: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim',
      date: 'May 8, 2020'
    },
    {
      id: 3,
      name: 'MITS',
      content: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim',
      date: 'May 8, 2020'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  const testimonialStyles = {
    container: {
      backgroundColor: '#001440',
      width: '100%',
      padding: '48px 16px',
      boxSizing: 'border-box'
    },
    innerContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heading: {
      color: '#00E5FF',
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '48px'
    },
    desktopView: {
      display: isMobile ? 'none' : 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      position: 'relative',
      margin: '0 auto'
    },
    mobileView: {
      display: isMobile ? 'block' : 'none'
    },
    testimonialCard: {
      backgroundColor: '#E6FAFF',
      borderRadius: '8px',
      padding: '32px',
      display: 'flex',
      gap: '24px',
      width: '45%',
      maxWidth: '560px',
      boxSizing: 'border-box'
    },
    mobileCard: {
      backgroundColor: '#E6FAFF',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '16px'
    },
    profileImage: {
      width: '96px',
      height: '96px',
      backgroundColor: '#D0D0D0',
      borderRadius: '50%',
      flexShrink: 0
    },
    mobileProfileImage: {
      width: '80px',
      height: '80px',
      backgroundColor: '#D0D0D0',
      borderRadius: '50%',
      margin: '0 auto 16px auto'
    },
    testimonialContent: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    name: {
      fontWeight: 'bold',
      fontSize: '20px',
      marginBottom: '8px'
    },
    mobileName: {
      fontWeight: 'bold',
      fontSize: '18px',
      textAlign: 'center',
      marginBottom: '16px'
    },
    content: {
      color: '#333',
      marginBottom: '16px',
      fontSize: '14px'
    },
    date: {
      color: '#777',
      fontSize: '14px',
      marginTop: 'auto'
    },
    mobileDate: {
      color: '#777',
      fontSize: '12px',
      textAlign: 'center',
      marginTop: '16px'
    },
    mobileProfileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '16px'
    },
    navigationDots: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '24px',
      gap: '8px'
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#777',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    },
    activeDot: {
      backgroundColor: '#00E5FF'
    },
    navButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '32px',
      gap: '16px'
    },
    navButton: {
      backgroundColor: '#00E5FF',
      color: '#001440',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px'
    }
  };

  return (
    <div style={testimonialStyles.container}>
      <div style={testimonialStyles.innerContainer}>
        <h2 style={testimonialStyles.heading}>Client Testimonials</h2>
        
        {/* Desktop View */}
        <div className="desktop-view" style={testimonialStyles.desktopView}>
          <button 
            onClick={prevTestimonial}
            style={testimonialStyles.navButton}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </button>
          <div style={testimonialStyles.testimonialCard}>
            <div style={testimonialStyles.profileImage}></div>
            <div style={testimonialStyles.testimonialContent}>
              <h3 style={testimonialStyles.name}>{testimonials[currentIndex].name}</h3>
              <p style={testimonialStyles.content}>{testimonials[currentIndex].content}</p>
              <p style={testimonialStyles.date}>{testimonials[currentIndex].date}</p>
            </div>
          </div>
          <button 
            onClick={nextTestimonial}
            style={testimonialStyles.navButton}
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </button>
        </div>
        
        {/* Mobile View */}
        <div className="mobile-view" style={testimonialStyles.mobileView}>
          <div style={testimonialStyles.mobileCard}>
            <div style={testimonialStyles.mobileProfileContainer}>
              <div style={testimonialStyles.mobileProfileImage}></div>
              <h3 style={testimonialStyles.mobileName}>{testimonials[currentIndex].name}</h3>
            </div>
            <p style={testimonialStyles.content}>{testimonials[currentIndex].content}</p>
            <p style={testimonialStyles.mobileDate}>{testimonials[currentIndex].date}</p>
          </div>
          
          {/* Navigation dots for mobile */}
          <div style={testimonialStyles.navigationDots}>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  ...testimonialStyles.dot,
                  ...(index === currentIndex ? testimonialStyles.activeDot : {})
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows - visible only on mobile view */}
          <div className="nav-buttons" style={testimonialStyles.navButtons}>
            <button 
              onClick={prevTestimonial}
              style={testimonialStyles.navButton}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              style={testimonialStyles.navButton}
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;