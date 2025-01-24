import React from "react";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  // Sample data for the dashboard
  const dashboardData = {
    totalLoans: 125,
    activeLoans: 85,
    overdueLoans: 12,
    totalRevenue: "$250,000",
    recentActivities: [
      { id: 1, activity: "Loan Application Approved", date: "2023-10-01" },
      { id: 2, activity: "New Loan Application Received", date: "2023-10-02" },
      { id: 3, activity: "Loan Disbursed", date: "2023-10-03" },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Loan Management Dashboard</h1>

      {/* Key Metrics Section */}
      <div className="metrics">
        <div className="metric-card">
          <h3>Total Loans</h3>
          <p>{dashboardData.totalLoans}</p>
        </div>
        <div className="metric-card">
          <h3>Active Loans</h3>
          <p>{dashboardData.activeLoans}</p>
        </div>
        <div className="metric-card">
          <h3>Overdue Loans</h3>
          <p>{dashboardData.overdueLoans}</p>
        </div>
        <div className="metric-card">
          <h3>Total Revenue</h3>
          <p>{dashboardData.totalRevenue}</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {dashboardData.recentActivities.map((activity) => (
            <li key={activity.id}>
              <span>{activity.activity}</span>
              <span>{activity.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button>Create New Loan</button>
          <button>View All Loans</button>
          <button>Generate Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;