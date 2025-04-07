import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Machinery Shipping Solutions</h1>
        <p className="hero-subtitle">Reliable transport for heavy equipment across Ethiopia</p>
        <Link to="/booking" className="cta-button">Get Started</Link>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚛</div>
          <h3>Real-Time Tracking</h3>
          <p>Monitor your shipments live with GPS technology</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Competitive Pricing</h3>
          <p>Affordable rates for businesses of all sizes</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Secure Transport</h3>
          <p>Insured and protected machinery handling</p>
        </div>
      </section>
    </div>
  );
};

export default Home;