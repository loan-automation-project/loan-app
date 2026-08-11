import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { apiUrl } from '../../config/api';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl('/api/auth/login/user'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username.trim(), password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Invalid username or password');
      }

      const token = await response.text();
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', 'ROLE_USER');
      localStorage.setItem('username', username.trim());

      const destination = location.state?.from || '/user-dashboard';
      navigate(destination, { replace: true });
    } catch (err) {
      setError(err.message || 'Unable to sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">User Login</h2>
      {error && <p className="error-message" role="alert">{error}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            autoComplete="username"
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
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" className="login-page-button" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Login'}
        </button>
      </form>

      <div className="link-container">
        <p><Link to="/admin-login" className="admin-login-link">Login as Admin</Link></p>
        <p>
          Don't have an account?{' '}
          <Link to="/register" className="register-link">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
