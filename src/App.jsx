import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/about/AboutUs';
import AdminPage from './components/login/admin/AdminPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import LoanApplicationForm from './components/loan-application/LoanApplicationForm';
import Dashboard from './components/dashboard/Dashboard';
import UserDashboard from './components/dashboard/user-dashboard/UserDashboard';
import EmiCalculator from './components/emi-calculator/EmiCalculator';
import AdminDashboard from './components/dashboard/admin-dashboard/AdminDashboard';
import EligibilityCriteria from './components/Eligibility/EligibilityCriteria';
import FaqPage from './components/Faqs/FaqPage';
import ProtectedRoute from './components/ProtectedRoute';
import Documents from './components/loan-application/Documents';
import PendingApplications from './components/dashboard/admin-dashboard/PendingApplications';
import ApplicantDetails from './components/dashboard/admin-dashboard/ApplicantDetails';
import Approve from './components/dashboard/admin-dashboard/Approve';
import Transaction from './components/transaction/Transaction';
import LoanDetails from './components/dashboard/admin-dashboard/LoanDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin-login" element={<AdminPage />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/eligibility" element={<EligibilityCriteria />} />
        <Route path="/faqs" element={<FaqPage />} />

        <Route path="/user-dashboard" element={
          <ProtectedRoute allowedRole="ROLE_USER"><UserDashboard /></ProtectedRoute>
        } />
        <Route path="/loan-application" element={
          <ProtectedRoute allowedRole="ROLE_USER"><LoanApplicationForm /></ProtectedRoute>
        } />
        <Route path="/documents" element={
          <ProtectedRoute allowedRole="ROLE_USER"><Documents /></ProtectedRoute>
        } />
        <Route path="/transaction" element={
          <ProtectedRoute allowedRole="ROLE_USER"><Transaction /></ProtectedRoute>
        } />

        <Route path="/admin-dashboard" element={
          <ProtectedRoute allowedRole="ROLE_ADMIN"><AdminDashboard /></ProtectedRoute>
        } />
        <Route path="/pending-applications" element={
          <ProtectedRoute allowedRole="ROLE_ADMIN"><PendingApplications /></ProtectedRoute>
        } />
        <Route path="/applicant-details/:loanId" element={
          <ProtectedRoute allowedRole="ROLE_ADMIN"><ApplicantDetails /></ProtectedRoute>
        } />
        <Route path="/approve" element={
          <ProtectedRoute allowedRole="ROLE_ADMIN"><Approve /></ProtectedRoute>
        } />
        <Route path="/loan-details" element={
          <ProtectedRoute allowedRole="ROLE_ADMIN"><LoanDetails /></ProtectedRoute>
        } />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unauthorized" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
