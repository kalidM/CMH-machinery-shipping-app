import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/hero-image.jpg'; // Add your image
import logo from '../assets/logo.png'; // Add your logo image
import { FiTruck, FiDollarSign, FiShield, FiSearch, FiUser } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="CHM Shipping Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/suppliers" className="nav-link">Search Suppliers</Link>
          <Link to="/orders" className="nav-link">Order Details</Link>
        </div>
        <div className="navbar-right">
          <FiSearch className="nav-icon" />
          <FiUser className="nav-icon" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Heavy Machinery Transport <span>Made Simple</span></h1>
          <p className="subtitle">Reliable, tracked shipping across Ethiopia</p>
          <Link to="/booking" className="cta-button">Book Now →</Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Truck transporting machinery" />
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
    </div>
  );
};

export default Home;
