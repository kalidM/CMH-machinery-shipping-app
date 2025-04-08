import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import { FaStar } from 'react-icons/fa';
import customerImg from '../assets/customer1.jpg'; 
import { FiTruck, FiDollarSign, FiShield } from 'react-icons/fi';

import Footer from './Footer';

const images = [heroImage1, heroImage2, heroImage3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Heavy Machinery Transport <span>Made Simple</span></h1>
          <p className="subtitle">Reliable, tracked shipping across Ethiopia</p>
          <Link to="/Dashboard" className="cta-button">Book Now →</Link>
        </div>
        <div className="hero-image">
          <img src={images[currentIndex]} alt="Truck transporting machinery" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="feature-card">
          <FiTruck className="feature-icon" />
          <h3>Real-Time GPS Tracking</h3>
          <p>Monitor your equipment 24/7 with live updates</p>
        </div>
        <div className="feature-card">
          <FiDollarSign className="feature-icon" />
          <h3>Transparent Pricing</h3>
          <p>No hidden fees with instant quotes</p>
        </div>
        <div className="feature-card">
          <FiShield className="feature-icon" />
          <h3>Fully Insured</h3>
          <p>Your machinery protected from pickup to delivery</p>
        </div>
      </section>
      <div className="testimonial-card">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-body">
        <div className="testimonial-image">
          <img src={customerImg} alt="Customer" />
        </div>
        <div className="testimonial-content">
          <h3>Selam Tadesse</h3>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#fbbf24" />
            ))}
          </div>
          <p>
            “I was amazed by how easy it was to book heavy machinery for transport. 
            The tracking was accurate and the service was reliable from start to finish. 
            Definitely using CHM-Shipment again!”
          </p>
        </div>
      </div>
    </div>

<Footer />








    </div>
  );
};

export default Home;
