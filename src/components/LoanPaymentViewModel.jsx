import React from 'react';

function LoanPaymentViewModel({ paymentDetails }) {
  return (
    <div>
      <h3>Loan Payment Details</h3>
      <p>Amount: {paymentDetails.amount}</p>
      <p>Due Date: {paymentDetails.dueDate}</p>
    </div>
  );
}

export default LoanPaymentViewModel;
