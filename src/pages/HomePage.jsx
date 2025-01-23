

import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a onClick={() => navigate("/")} className="nav-link">
            Home
          </a>
          <a onClick={() => navigate("/about")} className="nav-link">
            About
          </a>
        </div>
        <div className="header-right">
          <button
            className="header-button login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="header-button register-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to the Homepage</h1>
        <p>Explore our website to learn more about what we offer!</p>

        {/* Carousel Section */}
        <section className="carousel-section">
          <div className="carousel">
            <img src="image1.jpg" alt="Image 1" />
            <img src="image2.jpg" alt="Image 2" />
            <img src="image3.jpg" alt="Image 3" />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How Does It Work?</h2>
          <p>We have a fast and easy application process.</p>
          <div className="steps-cards">
            <div className="step-card">
              <h3>1. Check Your Eligibility</h3>
              <p>Quick and simple eligibility check.</p>
            </div>
            <div className="step-card">
              <h3>2. Choose Loan Amount</h3>
              <p>Select the amount that suits you.</p>
            </div>
            <div className="step-card">
              <h3>3. Get Your Cash</h3>
              <p>Fast processing of your loan application.</p>
            </div>
          </div>
        </section>

        {/* Reasons to Choose Us Section */}
        <section className="reasons-to-choose-us">
          <h2>Reasons to Choose Us</h2>
          <div className="reasons-cards">
            <div className="reason-card">
              <h3>EMI Calculator</h3>
              <p>Calculate your monthly EMI easily.</p>
            </div>
            <div className="reason-card">
              <h3>Customers Love Us!</h3>
              <p>Our customers are happy with our service.</p>
            </div>
            <div className="reason-card">
              <h3>Easy Documentation</h3>
              <p>Simplified and quick documentation process.</p>
            </div>
            <div className="reason-card">
              <h3>Fast Approval</h3>
              <p>Your loan is approved in no time.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
