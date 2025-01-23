import React from 'react';
import RegisterForm from './RegisterForm';
import Footer from '../Footer';
import Header from '../Header';

function RegisterPage() {
  return (
    <div>
      {/* <h2>Register</h2> */}
      <Header/>
      <RegisterForm />
      <Footer/>
    </div>
  );
}

export default RegisterPage;
