
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection
import './LoginForm.css'; // Import the CSS file for styling

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      
      {/* Register Link */}
      <div className="register-link-container">
        <p>
          Don't have an account?{' '}
          <span
            className="register-link"
            onClick={() => navigate('/register')} // Redirect to register page on click
          >
            Register Here
          </span>
        </p>
      </div>



      
    </div>
  );
}

export default LoginForm;
