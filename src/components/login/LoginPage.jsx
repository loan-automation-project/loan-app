import React from 'react';
import LoginForm from './LoginForm';
import Header from '../Header';
import Footer from '../Footer';

function LoginPage() {
  return (
    <div>
      {/* <h2>Login</h2> */}
      <Header/>
      <LoginForm />
      <Footer/>
    </div>
  );
}

export default LoginPage;
