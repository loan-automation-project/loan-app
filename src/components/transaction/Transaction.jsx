import React, { useState, useEffect } from 'react';
import './Transaction.css';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    transactionNumber: '',
    loanApprovalId: '',
    transactionAmount: ''
  });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:1096/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      setTransactions(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1096/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction)
      });

      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }

      // Clear form and refresh transactions
      setNewTransaction({
        transactionNumber: '',
        loanApprovalId: '',
        transactionAmount: ''
      });
      setShowForm(false); // Hide form after successful submission
      fetchTransactions();
    } catch (error) {
      console.error('Error creating transaction:', error);
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading transactions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="transaction-container">
      <div className="header">
        <h2>Transaction History</h2>
        <button 
          className="add-button" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Transaction'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="transaction-form">
          <div className="form-group">
            <label htmlFor="transactionNumber">Transaction Number:</label>
            <input
              type="text"
              id="transactionNumber"
              name="transactionNumber"
              value={newTransaction.transactionNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanApprovalId">Loan Approval ID:</label>
            <input
              type="text"
              id="loanApprovalId"
              name="loanApprovalId"
              value={newTransaction.loanApprovalId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="transactionAmount">Amount:</label>
            <input
              type="number"
              id="transactionAmount"
              name="transactionAmount"
              value={newTransaction.transactionAmount}
              onChange={handleInputChange}
              required
              step="0.01"
            />
          </div>
          <button type="submit" className="submit-button">Submit Transaction</button>
        </form>
      )}

      <div className="transactions-list">
        {transactions.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Transaction Number</th>
                <th>Loan Approval ID</th>
                <th>Transaction Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.transactionId}>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.transactionNumber}</td>
                  <td>{transaction.loanApprovalId}</td>
                  <td>{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                  <td>${Number(transaction.transactionAmount).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    </div>
  );
};

export default Transaction;