// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Add your CSS file for styling

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Machinery Shipping</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/booking">Book a Shipment</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Efficient Machinery Shipping Across Ethiopia</h1>
        <p>Reliable, affordable, and fast shipping services for your tools and machinery.</p>
        <Link to="/booking" className="cta-button">Get Started</Link>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <span>🚚</span>
          <h3>Real-Time Tracking</h3>
          <p>Track your shipments in real-time with our advanced tracking system.</p>
        </div>
        <div className="feature">
          <span>💵</span>
          <h3>Affordable Pricing</h3>
          <p>Get competitive prices for shipping your machinery and tools.</p>
        </div>
        <div className="feature">
          <span>🛡️</span>
          <h3>Reliable Service</h3>
          <p>Trusted by businesses and individuals across Ethiopia.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;