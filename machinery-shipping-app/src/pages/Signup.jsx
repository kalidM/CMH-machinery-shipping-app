import React from 'react';
import './Signup.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Create an account</h2>
      <form className="register-form">
        <label>Full Name</label>
        <input type="text" placeholder="Jane Doe" />

        <label>Email Address</label>
        <input type="email" placeholder="janedoe@example.com" />

        <label>Phone Number</label>
        <input type="text" placeholder="(123) 456-7890" />

        <label>Business Name</label>
        <input type="text" placeholder="Jane's Cafe" />

        <label>Business Type</label>
        <input type="text" placeholder="Coffee Shop" />

        <label>Business Address</label>
        <textarea placeholder="123 Main St, Anytown, USA" />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
