import React, { useState, useEffect } from 'react';
import './Transaction.css';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchTransactions();
  }, []);

  if (loading) {
    return <div className="loading-state">Loading transactions...</div>;
  }

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2 className="transactions-title">Transaction History</h2>
      </div>

      <div className="transactions-table-container">
        <table className="transactions-table">
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
                <td className="amount-cell">
                  Rs.{Number(transaction.transactionAmount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {transactions.length === 0 && (
          <div className="empty-state">No transactions found</div>
        )}
      </div>
    </div>
  );
};

export default Transaction;