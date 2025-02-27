import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './assets/Components/Navbar/Navbar.jsx';
import './index.css';
import Footer from './assets/Components/Footer/Footer.jsx';
import ClientTestimonials from './assets/Components/Testimonials/ClientTestimonials.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
    <ClientTestimonials/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
);