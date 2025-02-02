

import React, { useState } from "react";
import "./EMICalculator.css"; // Import the CSS file

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [loanType, setLoanType] = useState("Home Loan");
  const [emiDetails, setEmiDetails] = useState([]);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const tenure = parseFloat(loanTenure);

    if (principal <= 0 || rate <= 0 || tenure <= 0) {
      alert("Please enter valid values for Loan Amount, Interest Rate, and Loan Tenure.");
      return;
    }

    const emi =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    const emiArray = [];
    let remainingPrincipal = principal;

    for (let i = 1; i <= tenure; i++) {
      const interest = remainingPrincipal * rate;
      const principalPaid = emi - interest;
      remainingPrincipal -= principalPaid;

      emiArray.push({
        month: i,
        emi: emi.toFixed(2),
        principalPaid: principalPaid.toFixed(2),
        interestPaid: interest.toFixed(2),
        remainingPrincipal: remainingPrincipal.toFixed(2),
      });
    }

    setEmiDetails(emiArray);
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  return (
    <div className="emi-calculator-container">
      {/* Header */}
      <div className="header">
        {/* Back Button */}
        <button className="back-button" onClick={() => window.history.back()}>
          &larr; Back
        </button>

        {/* Profile Section */}
        {/* <div className="profile-section" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
          <img
            src="https://via.placeholder.com/40" // Placeholder image URL
            alt="Profile"
            className="profile-image"
          />
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div> */}
      </div>

      {/* EMI Calculator Form */}
      <div className="emi-calculator-content">
        <h2>EMI Calculator</h2>

        {/* Loan Type Dropdown */}
        <div className="input-group">
          <label>Type of Loan:</label>
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option value="Home Loan">Home Loan</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Gold Loan">Gold Loan</option>
          </select>
        </div>

        {/* Loan Amount Input */}
        <div className="input-group">
          <label>Loan Amount (₹):</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>

        {/* Loan Tenure Input */}
        <div className="input-group">
          <label>Loan Tenure (Months):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            placeholder="Enter loan tenure"
          />
        </div>

        {/* Calculate Button */}
        <button className="calculate-button" onClick={calculateEMI}>
          Calculate EMI
        </button>

        {/* EMI Details Table */}
        {emiDetails.length > 0 && (
          <div className="emi-table-container">
            <h3>EMI Breakdown</h3>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>EMI (₹)</th>
                    <th>Principal Paid (₹)</th>
                    <th>Interest Paid (₹)</th>
                    <th>Remaining Principal (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {emiDetails.map((emi, index) => (
                    <tr key={index}>
                      <td>{emi.month}</td>
                      <td>{emi.emi}</td>
                      <td>{emi.principalPaid}</td>
                      <td>{emi.interestPaid}</td>
                      <td>{emi.remainingPrincipal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EMICalculator;