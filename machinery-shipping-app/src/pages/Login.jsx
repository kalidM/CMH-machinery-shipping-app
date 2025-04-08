import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let formErrors = {};
    let isValid = true;

    // Validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+(com|net|org|edu|gov|et)$/;
    if (!email || !emailRegex.test(email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate password
    if (!password || password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      // Proceed with login logic (e.g., API call)
      console.log({ email, password });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">Login</button>
      </form>

      <p className="signup-link">
        Don't have an account? <a href="/Signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
