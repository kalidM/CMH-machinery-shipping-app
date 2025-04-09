import React, { useState } from 'react';
import './Signup.css';
import { auth, db } from '../config/firebase'; // make sure firebase is properly configured
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
    let isValid = true;
    setError('');
    setLoading(true);

    // Form validation
    if (!fullName || fullName.length < 3) {
      formErrors.fullName = 'Full Name must be at least 3 characters';
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!businessName) {
      formErrors.businessName = 'Business Name is required';
      isValid = false;
    }

    if (!businessType) {
      formErrors.businessType = 'Business Type is required';
      isValid = false;
    }

    if (!businessAddress) {
      formErrors.businessAddress = 'Business Address is required';
      isValid = false;
    }

    if (!password || password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      try {
        // Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Add additional user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          fullName,
          email,
          phone,
          businessName,
          businessType,
          businessAddress,
          uid: user.uid,
        });


        
        console.log("succusseful before");
        // Redirect to the dashboard after successful registration
        setTimeout(() => {
          navigate('/Dashboard');
        }, 500); 

        console.log("succusseful after");
      } catch (error) {
        setError('Failed to create an account: ' + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
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
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          {errors.businessName && <span className="error">{errors.businessName}</span>}
        </div>

        <div className="form-group">
          <label>Business Type</label>
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
          {errors.businessType && <span className="error">{errors.businessType}</span>}
        </div>

        <div className="form-group">
          <label>Business Address</label>
          <textarea
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          ></textarea>
          {errors.businessAddress && <span className="error">{errors.businessAddress}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
