import React from 'react';
import LoanApplicationForm from './LoanApplicationForm';
import Header from '../Header';
import Footer from '../Footer';

function LoanApplicationPage() {
  return (
    <div>
      {/* <h2>Login</h2> */}
      <Header/>
      <LoanApplicationForm />
      <Footer/>
    </div>
  );
}

export default LoanApplicationPage;
