import React, { useState } from 'react';
import './Signup.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let formErrors = {};
    let isValid = true;

    // Validate fullName
    if (!fullName || fullName.length < 3) {
      formErrors.fullName = 'Full Name must be at least 3 characters';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+(com|net|org|edu|gov|et)$/;
    if (!email || !emailRegex.test(email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    // Validate business name
    if (!businessName) {
      formErrors.businessName = 'Business Name is required';
      isValid = false;
    }

    // Validate business type
    if (!businessType) {
      formErrors.businessType = 'Business Type is required';
      isValid = false;
    }

    // Validate business address
    if (!businessAddress) {
      formErrors.businessAddress = 'Business Address is required';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      // Submit form data (you can send this to a backend)
      console.log({
        fullName,
        email,
        phone,
        businessName,
        businessType,
        businessAddress,
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Doe"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="janedoe@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0912345678"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Jane's Cafe"
          />
          {errors.businessName && <span className="error">{errors.businessName}</span>}
        </div>

        <div className="form-group">
          <label>Business Type</label>
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Coffee Shop"
          />
          {errors.businessType && <span className="error">{errors.businessType}</span>}
        </div>

        <div className="form-group">
          <label>Business Address</label>
          <textarea
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            placeholder="123 Main St"
          ></textarea>
          {errors.businessAddress && <span className="error">{errors.businessAddress}</span>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <p className="login-link">
        Already have an account? <a href="/Login">Login</a>
      </p>
    </div>
  );
};

export default Register;
