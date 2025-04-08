// Login.js
import React, { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth(); // Get current user from context
  const navigate = useNavigate();

  // Redirect the user to dashboard if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate('/Dashboard');
    }
  }, [currentUser, navigate]);

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate password strength
  const isStrongPassword = (password) => {
    // At least 6 characters, one number, one uppercase letter
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  // Form validation
  const validateForm = () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!isStrongPassword(password)) {
      setError('Password must be at least 6 characters, contain one uppercase letter and one number.');
      return false;
    }
    return true;
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateForm()) return;

    setLoading(true);
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);
      navigate('/Dashboard'); // Redirect to dashboard on success
    } catch (err) {
      const message =
        err.code === 'auth/user-not-found'
          ? 'No user found with this email.'
          : err.code === 'auth/wrong-password'
          ? 'Incorrect password.'
          : 'Failed to log in.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
