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
// import LoanApplicationPage from './components/loan-application/LoanApplicationPage'
import LoanApplicationForm from './components/loan-application/LoanApplicationForm'
import Dashboard from './components/dashboard/Dashboard';
import UserDashboard from './components/dashboard/user-dashboard/UserDashboard';
import EmiCalculator from './components/emi-calculator/EmiCalculator';
import AdminDashboard from './components/dashboard/admin-dashboard/AdminDashboard';
import EligibilityCriteria from './components/eligibility/EligibilityCriteria';
import Faqs from './components/Faqs/Faqs';
import FaqPage from './components/Faqs/FaqPage';
import ProtectedRoute from './components/ProtectedRoute';
import Documents from './components/loan-application/Documents';
import PendingApplications from './components/dashboard/admin-dashboard/PendingApplications';
import ApplicantDetails from './components/dashboard/admin-dashboard/ApplicantDetails';
import Approve from './components/dashboard/admin-dashboard/Approve';
import Transaction from './components/transaction/Transaction';

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
        <Route path="/loan-application" element={<LoanApplicationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard" element={
          <ProtectedRoute allowedRole="ROLE_USER">
            <UserDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin-dashboard" element={
          <ProtectedRoute allowedRole="ROLE_ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        } />



          {/* Protected Routes */}
         
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/eligibility" element={<EligibilityCriteria />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/pending-applications" element={<PendingApplications />} />
        <Route path="/applicant-details" element={<ApplicantDetails />} />
        <Route path="/approve" element={<Approve />} />
        <Route path="/transaction" element={<Transaction />} />

      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </>

    
  )
}

export default App
