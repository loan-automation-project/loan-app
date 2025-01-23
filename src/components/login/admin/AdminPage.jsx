import React from 'react';
import AdminLogin from './AdminLogin';
import Header from '../../Header';
import Footer from '../../Footer';

function AdminPage() {
  return (
    <div>
      {/* <h2>Login</h2> */}
      <Header/>
      <AdminLogin />
      <Footer/>
    </div>
  );
}

export default AdminPage;
