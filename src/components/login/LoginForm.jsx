
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8060/api/auth/login/user', {
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
        const errorData = await response.text();
        throw new Error(errorData || 'Login failed');
      }

      const token = await response.text();
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', 'ROLE_USER');
      localStorage.setItem('username', username);
      
      navigate('/user-dashboard');
      
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.message);
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">User Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
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
        <button type="submit" className="login-page-button">
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
