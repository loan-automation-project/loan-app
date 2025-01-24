import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import LoginForm from './components/login/LoginForm'
// import LoginPage from './components/login/LoginPage'
import { Routes, Router, Route, BrowserRouter } from 'react-router-dom'; 
import RegisterForm from './components/register/RegisterForm'
import HomePage from './pages/HomePage'
import AboutUs from './pages/about/AboutUs'
import AdminLogin from './components/login/admin/AdminLogin'
import LoginPage from './components/login/LoginPage'
import RegisterPage from './components/register/RegisterPage';
import AdminPage from './components/login/admin/AdminPage';
import LoanApplicationPage from './components/loan-application/LoanApplicationPage'
import Dashboard from './components/dashboard/Dashboard';
import UserDashboard from './components/dashboard/user-dashboard/UserDashboard';

function App() {


  return (
    // <div>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    //     {/* More routes can go here */}
    //   </Routes>
    //   </BrowserRouter>
    // </div>
    // <LoginForm></LoginForm>
    // <RegisterForm></RegisterForm>
    // <HomePage></HomePage>
    <>
<BrowserRouter>
{/* <Router> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin-login" element={<AdminPage />} />
        <Route path="/loan-application" element={<LoanApplicationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />

      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </>

    
  )
}

export default App
