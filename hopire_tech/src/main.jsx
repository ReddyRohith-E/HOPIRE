import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar.jsx';
import './index.css';
import Footer from './assets/Components/Footer/Footer.jsx';
import ClientTestimonials from './assets/Components/Testimonials/ClientTestimonials.jsx';
import Portfolio from './assets/Components/Portfolio/Portfolio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
    <Portfolio/>
    <ClientTestimonials/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
);