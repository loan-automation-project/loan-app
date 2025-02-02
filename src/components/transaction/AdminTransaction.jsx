import React, { useState, useEffect } from 'react';
import './AdminTransaction.css';

const AdminTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validating, setValidating] = useState(null); // Track which transaction is being validated

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

  const handleValidate = async (transactionId) => {
    setValidating(transactionId);
    try {
      const response = await fetch(`http://localhost:1096/transactions/${transactionId}/validate`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to validate transaction');
      }

      // Refresh the transactions list to show updated status
      await fetchTransactions();
    } catch (error) {
      console.error('Error validating transaction:', error);
      setError(error.message);
    } finally {
      setValidating(null);
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
      <h2>Transaction History</h2>
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
                <th>Status</th>
                <th>Action</th>
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
                  <td>{transaction.status || 'Pending'}</td>
                  <td>
                    <button
                      className={`validate-button ${transaction.status === 'Validated' ? 'validated' : ''}`}
                      onClick={() => handleValidate(transaction.transactionId)}
                      disabled={validating === transaction.transactionId || transaction.status === 'Validated'}
                    >
                      {validating === transaction.transactionId 
                        ? 'Validating...' 
                        : transaction.status === 'Validated' 
                          ? 'Validated' 
                          : 'Validate'}
                    </button>
                  </td>
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

export default AdminTransaction;