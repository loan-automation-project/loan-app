import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Admin logging in with Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="admin-email">Email:</label>
          <input
            type="email"
            id="admin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your admin email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="admin-password">Password:</label>
          <input
            type="password"
            id="admin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="admin-login-button">
          Login
        </button>
      </form>

      {/* User Login Link */}
      <div className="link-container">
        <p>
          <a
            className="user-login-link"
            onClick={() => navigate('/login')}
          >
            Login as User
          </a>
        </p>

        {/* Register Link */}
        
      </div>
    </div>
  );
}

export default AdminLogin;
