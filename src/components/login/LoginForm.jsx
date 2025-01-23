
import Header from "../Header";
import Footer from "../Footer";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-form-container">
        
      <h2 className="login-title">User Login</h2>
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

      {/* Admin Login Link */}
      <div className="link-container">
        <p>
          <Link to="/admin-login" className="admin-login-link">
            Login as Admin
          </Link>
        </p>

        {/* Register Link */}
        <p>
          Don't have an account?{' '}
          <span
            className="register-link"
            onClick={() => navigate('/register')}
          >
            Register Here
          </span>
        </p>
      </div>
      
    </div>
  );
}

export default LoginForm;
