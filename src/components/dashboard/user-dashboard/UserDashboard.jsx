import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import Transaction from '../../../components/transaction/Transaction.jsx';

const LAST_APPLICATION_KEY = 'lastSubmittedApplication';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'User';
  const hasDraft = Boolean(localStorage.getItem('loanApplicationDraft'));

  let latestApplication = null;
  try { latestApplication = JSON.parse(localStorage.getItem(LAST_APPLICATION_KEY) || 'null'); } catch { latestApplication = null; }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate('/');
  };

  const renderMainContent = () => {
    if (activeSection === 'transactions') return <div className="main-content"><h2>Transactions</h2><Transaction /></div>;
    if (activeSection === 'documents') return <div className="main-content"><h2>Documents</h2><p>Upload and manage documents required for your loan application.</p></div>;

    return <div className="main-content">
      <div className="dashboard-heading"><div><p className="eyebrow">Welcome back</p><h2>{username}'s Dashboard</h2><p>Track your application and continue your loan journey.</p></div><button onClick={() => navigate('/loan-application')}>Apply for Loan</button></div>
      <div className="metrics">
        <div className="metric-card"><h3>Latest Application</h3><p>{latestApplication ? `#${latestApplication.loanId || 'Saved'}` : 'None yet'}</p></div>
        <div className="metric-card"><h3>Loan Type</h3><p>{latestApplication?.loanType || '—'}</p></div>
        <div className="metric-card"><h3>Application Status</h3><p>{latestApplication?.loanStatus || '—'}</p></div>
        <div className="metric-card"><h3>Draft</h3><p>{hasDraft ? 'In Progress' : 'None'}</p></div>
      </div>
      {hasDraft && <div className="dashboard-banner"><div><strong>Application draft saved</strong><p>You have an unfinished application. Resume it instead of starting again.</p></div><button onClick={() => navigate('/loan-application')}>Resume Draft</button></div>}
      {latestApplication && <div className="recent-card"><h3>Latest Submission</h3><div><span>Applicant</span><strong>{latestApplication.fullName || username}</strong></div><div><span>Loan Amount</span><strong>₹{Number(latestApplication.loanAmount || 0).toLocaleString('en-IN')}</strong></div><div><span>Status</span><strong>{latestApplication.loanStatus || 'Pending'}</strong></div></div>}
    </div>;
  };

  return <div className="user-dashboard">
    <div className="header"><div className="header-left"><button className="menu-button" onClick={() => setIsSideNavOpen(!isSideNavOpen)}>☰</button><div className="header-links"><button onClick={() => navigate('/loan-application')} className="header-link">Apply for Loan</button><button onClick={() => navigate('/emi-calculator')} className="header-link">EMI Calculator</button><button onClick={() => navigate('/eligibility')} className="header-link">Eligibility</button><button onClick={() => navigate('/faqs')} className="header-link">FAQs</button></div></div><div className="header-right"><div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}><div className="user-info"><span className="user-name">{username}</span><span className="user-role">User</span></div>{isProfileDropdownOpen && <div className="profile-dropdown"><button className="logout-button" onClick={handleLogout}>Logout</button></div>}</div></div></div>
    <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}><h2>Loan Management</h2><ul>{['dashboard', 'documents', 'transactions'].map((section) => <li key={section} className={activeSection === section ? 'active' : ''} onClick={() => { setActiveSection(section); setIsSideNavOpen(false); }}>{section === 'dashboard' ? 'Dashboard' : section[0].toUpperCase() + section.slice(1)}</li>)}</ul></div>
    <div className="content">{renderMainContent()}</div>
  </div>;
};

export default UserDashboard;
