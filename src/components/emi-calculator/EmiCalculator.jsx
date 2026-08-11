import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EMICalculator.css';

const loanRates = { 'Home Loan': 8.5, 'Personal Loan': 11.5, 'Car Loan': 9.25, 'Gold Loan': 10.5 };

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState(loanRates['Home Loan']);
  const [loanTenure, setLoanTenure] = useState(60);
  const [loanType, setLoanType] = useState('Home Loan');
  const [emiDetails, setEmiDetails] = useState([]);
  const navigate = useNavigate();

  const summary = useMemo(() => {
    if (!emiDetails.length) return null;
    const emi = Number(emiDetails[0].emi);
    const totalPayment = emi * emiDetails.length;
    return { emi, totalPayment, totalInterest: totalPayment - Number(loanAmount) };
  }, [emiDetails, loanAmount]);

  const calculateEMI = () => {
    const principal = Number(loanAmount);
    const monthlyRate = Number(interestRate) / 12 / 100;
    const months = Number(loanTenure);

    if (principal <= 0 || monthlyRate <= 0 || months <= 0 || months > 360) return;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const schedule = [];
    let remaining = principal;
    for (let month = 1; month <= months; month += 1) {
      const interest = remaining * monthlyRate;
      const principalPaid = Math.min(emi - interest, remaining);
      remaining = Math.max(0, remaining - principalPaid);
      schedule.push({ month, emi, principalPaid, interestPaid: interest, remainingPrincipal: remaining });
    }
    setEmiDetails(schedule);
  };

  const selectLoanType = (type) => {
    setLoanType(type);
    setInterestRate(loanRates[type]);
    setEmiDetails([]);
  };

  return (
    <div className="emi-calculator-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <main className="emi-calculator-content">
        <p className="eyebrow">Loan Planning Tool</p>
        <h2>EMI Calculator</h2>
        <p>Estimate your monthly payment and understand the total interest before applying.</p>

        <div className="input-group">
          <label>Type of Loan:</label>
          <select value={loanType} onChange={(e) => selectLoanType(e.target.value)}>
            {Object.keys(loanRates).map((type) => <option key={type}>{type}</option>)}
          </select>
        </div>
        <div className="input-group">
          <label>Loan Amount (₹):</label>
          <input type="number" min="1" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="e.g. 500000" />
        </div>
        <div className="input-group">
          <label>Interest Rate (% p.a.):</label>
          <input type="number" min="0.1" max="50" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Loan Tenure (Months):</label>
          <input type="number" min="1" max="360" value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)} />
        </div>

        <button className="calculate-button" onClick={calculateEMI}>Calculate EMI</button>

        {summary && (
          <div className="emi-summary">
            <div><span>Monthly EMI</span><strong>₹{summary.emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></div>
            <div><span>Total Interest</span><strong>₹{summary.totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></div>
            <div><span>Total Payment</span><strong>₹{summary.totalPayment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></div>
          </div>
        )}

        {emiDetails.length > 0 && (
          <div className="emi-table-container">
            <h3>Amortization Schedule</h3>
            <div className="table-scroll">
              <table>
                <thead><tr><th>Month</th><th>EMI (₹)</th><th>Principal (₹)</th><th>Interest (₹)</th><th>Balance (₹)</th></tr></thead>
                <tbody>{emiDetails.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.emi.toFixed(2)}</td>
                    <td>{row.principalPaid.toFixed(2)}</td>
                    <td>{row.interestPaid.toFixed(2)}</td>
                    <td>{row.remainingPrincipal.toFixed(2)}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        )}
      </main>
      <footer className="footer"><p>&copy; 2026 Loan Management System</p></footer>
    </div>
  );
}

export default EMICalculator;
