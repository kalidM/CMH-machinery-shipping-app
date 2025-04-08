import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="company-info">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <h2 className="company-name">CHM-Shipment</h2>
          <p>Reliable heavy machinery transport across Ethiopia</p>

          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li>Booking</li>
              <li>Tracking</li>
              <li>Insurance</li>
              <li>Live Support</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>API Docs</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Plans & Pricing</h4>
            <ul>
              <li>Basic</li>
              <li>Pro</li>
              <li>Enterprise</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
