import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8060/api/auth/login/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: username,
          password: password 
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const token = await response.text();
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', 'ROLE_ADMIN');
      
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
      
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Admin Username"
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
