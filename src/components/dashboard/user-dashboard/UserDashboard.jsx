import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import Transaction from '../../../components/transaction/Transaction.jsx';
import { apiUrl } from '../../../config/api';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [stats, setStats] = useState({ totalApplications: 0, pendingApplications: 0, latestApplication: null });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'User';
  const hasDraft = Boolean(localStorage.getItem('loanApplicationDraft'));

  useEffect(() => {
    const loadDashboard = async () => {
      const token = localStorage.getItem('token');
      try {
        const headers = { Authorization: `Bearer ${token}`, 'X-Username': username };
        const [totalResponse, pendingResponse, latestResponse] = await Promise.all([
          fetch(apiUrl('/application/count'), { headers }),
          fetch(apiUrl('/application/pending/count'), { headers }),
          fetch(apiUrl('/application/latest'), { headers }),
        ]);

        const totalApplications = totalResponse.ok ? await totalResponse.json() : 0;
        const pendingApplications = pendingResponse.ok ? await pendingResponse.json() : 0;
        const latestApplication = latestResponse.ok ? await latestResponse.json() : null;
        setStats({ totalApplications, pendingApplications, latestApplication });
      } catch (error) {
        console.error('Unable to load dashboard data', error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate('/');
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'transactions':
        return <div className="main-content"><h2>Transactions</h2><Transaction /></div>;
      case 'documents':
        return <div className="main-content"><h2>Documents</h2><p>Upload and manage documents required for your loan application.</p></div>;
      default:
        return (
          <div className="main-content">
            <div className="dashboard-heading">
              <div><p className="eyebrow">Welcome back</p><h2>{username}'s Dashboard</h2><p>Track your applications and continue your loan journey.</p></div>
              <button onClick={() => navigate('/loan-application')}>Apply for Loan</button>
            </div>

            <div className="metrics">
              <div className="metric-card"><h3>Total Applications</h3><p>{loading ? '...' : stats.totalApplications}</p></div>
              <div className="metric-card"><h3>Pending Applications</h3><p>{loading ? '...' : stats.pendingApplications}</p></div>
              <div className="metric-card"><h3>Latest Loan</h3><p>{stats.latestApplication?.loanType || 'No applications'}</p></div>
              <div className="metric-card"><h3>Latest Status</h3><p>{stats.latestApplication?.loanStatus || '—'}</p></div>
            </div>

            {hasDraft && <div className="dashboard-banner"><div><strong>Application draft saved</strong><p>You have an unfinished application. Resume it instead of starting again.</p></div><button onClick={() => navigate('/loan-application')}>Resume Draft</button></div>}

            {stats.latestApplication && <div className="recent-card">
              <h3>Latest Application</h3>
              <div><span>Application ID</span><strong>#{stats.latestApplication.loanId}</strong></div>
              <div><span>Loan Type</span><strong>{stats.latestApplication.loanType}</strong></div>
              <div><span>Status</span><strong>{stats.latestApplication.loanStatus}</strong></div>
            </div>}
          </div>
        );
    }
  };

  return (
    <div className="user-dashboard">
      <div className="header">
        <div className="header-left">
          <button className="menu-button" onClick={() => setIsSideNavOpen(!isSideNavOpen)}>☰</button>
          <div className="header-links">
            <button onClick={() => navigate('/loan-application')} className="header-link">Apply for Loan</button>
            <button onClick={() => navigate('/emi-calculator')} className="header-link">EMI Calculator</button>
            <button onClick={() => navigate('/eligibility')} className="header-link">Eligibility</button>
            <button onClick={() => navigate('/faqs')} className="header-link">FAQs</button>
          </div>
        </div>
        <div className="header-right">
          <div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
            <div className="user-info"><span className="user-name">{username}</span><span className="user-role">User</span></div>
            {isProfileDropdownOpen && <div className="profile-dropdown"><button className="logout-button" onClick={handleLogout}>Logout</button></div>}
          </div>
        </div>
      </div>

      <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
        <h2>Loan Management</h2>
        <ul>
          {['dashboard', 'documents', 'transactions'].map((section) => (
            <li key={section} className={activeSection === section ? 'active' : ''} onClick={() => { setActiveSection(section); setIsSideNavOpen(false); }}>
              {section === 'dashboard' ? 'Dashboard' : section[0].toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      <div className="content">{renderMainContent()}</div>
    </div>
  );
};

export default UserDashboard;
