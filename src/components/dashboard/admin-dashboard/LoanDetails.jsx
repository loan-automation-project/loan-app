import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./LoanDetails.css";

const LoanDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanId: "",
    interestRate: "",
    loanTenure: "",
    approvalAmount: ""
  });

  const handleBack = () => {
    navigate("/approve");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/admin-dashboard");
  };

  return (
    <div className="loan-application-container">
      {/* Header */}
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          &larr; Back
        </button>
      </div>

      {/* Main Content */}
      <div className="loan-application-form">
        <h2>Loan Details</h2>
        
        <form onSubmit={handleSubmit} className="details-grid">
          <div className="detail-group">
            <label htmlFor="loanId">Loan ID</label>
            <input
              type="text"
              id="loanId"
              name="loanId"
              value={formData.loanId}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="detail-group">
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
              className="form-input"
              step="0.01"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="detail-group">
            <label htmlFor="loanTenure">Loan Tenure (months)</label>
            <input
              type="number"
              id="loanTenure"
              name="loanTenure"
              value={formData.loanTenure}
              onChange={handleChange}
              className="form-input"
              min="1"
              required
            />
          </div>

          <div className="detail-group">
            <label htmlFor="approvalAmount">Approval Amount</label>
            <input
              type="number"
              id="approvalAmount"
              name="approvalAmount"
              value={formData.approvalAmount}
              onChange={handleChange}
              className="form-input"
              min="0"
              required
            />
          </div>
        </form>

        <div className="action-buttons">
          <button 
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoanDetails;





