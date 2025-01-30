import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for page redirection
import './RegisterForm.css'; // Import the CSS file for styling

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    mobileNo: '',
    gender: '',
    age: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the request body with the exact structure the backend expects
      const requestBody = {
        name: formData.name,  // Add separate name field
        username: formData.name, // Use name as username
        password: formData.password,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`,
        mobileNumber: formData.mobileNo,
        gender: formData.gender,
        age: parseInt(formData.age, 10)
      };

      console.log('Sending registration data:', requestBody); // Debug log

      const response = await fetch('http://localhost:8060/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed: ' + (error.message || 'Unknown error occurred'));
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      mobileNo: '',
      gender: '',
      age: '',
      password: '',
      confirmPassword: '',
      name: '',
    });
  };

  return (
    <div className="register-form-container">
      <h2 className="register-title">Create an Account Here</h2>
      <p className="mandatory-text">* All fields are mandatory</p>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="tel"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="register-button-page">
            Register
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      {/* Already a user? Login link */}
      {/* <div className="login-link-container">
        <p>
          Already a user?{' '}
          <span
            className="login-link"
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </p>
      </div> */}
      <div className="login-link-container">
        <p>
          Already a user?{' '}
          <a className="login-link" onClick={() => navigate('/login')}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;




