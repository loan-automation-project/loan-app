

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./UserDashboard.css"; // Import the CSS file
// import User from "../../../assets/pictures/User.jpg";

// const UserDashboard = () => {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false); // State to manage side nav visibility
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State to manage profile dropdown
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Sample data for the dashboard
//   const dashboardData = {
//     totalLoans: 125,
//     activeLoans: 85,
//     overdueLoans: 12,
//     totalRevenue: "$250,000",
//   };

//   // Sample logged-in user data
//   const loggedInUser = {
//     name: "Angela",
//     role: "User",
//     profileImage: User, // Placeholder image URL
//   };

//   // Handle logout
//   const handleLogout = () => {
//     // Redirect to the home page
//     navigate("/"); // Replace "/" with the path to your home page
//   };

//   // Render the main content based on the active section
//   const renderMainContent = () => {
//     switch (activeSection) {
//       case "dashboard":
//         return (
//           <div className="main-content">
//             <h2>Dashboard Overview</h2>
//             <div className="metrics">
//               <div className="metric-card">
//                 <h3>Total Loans</h3>
//                 <p>{dashboardData.totalLoans}</p>
//               </div>
//               <div className="metric-card">
//                 <h3>Active Loans</h3>
//                 <p>{dashboardData.activeLoans}</p>
//               </div>
//               <div className="metric-card">
//                 <h3>Overdue Loans</h3>
//                 <p>{dashboardData.overdueLoans}</p>
//               </div>
//               <div className="metric-card">
//                 <h3>Total Revenue</h3>
//                 <p>{dashboardData.totalRevenue}</p>
//               </div>
//             </div>
//           </div>
//         );
//       case "users":
//         return (
//           <div className="main-content">
//             <h2>Manage Users</h2>
//             <p>View and manage all users in the system.</p>
//           </div>
//         );
//       case "roles":
//         return (
//           <div className="main-content">
//             <h2>Manage Roles</h2>
//             <p>View and manage user roles and permissions.</p>
//           </div>
//         );
//       case "loan_applications":
//         return (
//           <div className="main-content">
//             <h2>Loan Applications</h2>
//             <p>View and process loan applications.</p>
//           </div>
//         );
//       case "loan_approvals":
//         return (
//           <div className="main-content">
//             <h2>Loan Approvals</h2>
//             <p>Review and approve loan applications.</p>
//           </div>
//         );
//       case "documents":
//         return (
//           <div className="main-content">
//             <h2>Documents</h2>
//             <p>Manage and view uploaded documents.</p>
//           </div>
//         );
//       case "transactions":
//         return (
//           <div className="main-content">
//             <h2>Transactions</h2>
//             <p>View and manage all transactions.</p>
//           </div>
//         );
//       default:
//         return (
//           <div className="main-content">
//             <h2>Dashboard Overview</h2>
//             <div className="metrics">
//               <div className="metric-card">
//                 <h3>Total Loans</h3>
//                 <p>{dashboardData.totalLoans}</p>
//               </div>
//               <div className="metric-card">
//                 <h3>Active Loans</h3>
//                 <p>{dashboardData.activeLoans}</p>
//               </div>
//               <div className="metric-card">
//                 <h3>Overdue Loans</h3>
//                 <p>{dashboardData.overdueLoans}</p>
//               </div>
//               <div className="metric-card">
//                 <h3>Total Revenue</h3>
//                 <p>{dashboardData.totalRevenue}</p>
//               </div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="user-dashboard">
//       {/* Header */}
//       <div className="header">
//         <div className="header-left">
//           <button className="menu-button" onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
//             ☰
//           </button>
//           <div className="header-links">
//             <a onClick={() => navigate("/loan-application")} className="header-link">
//               Apply for Loan
//             </a>
//             <a onClick={() => navigate("/emi-calculator")} className="header-link">
//               EMI Calculator
//             </a>
//             {/* Add Eligibility Criteria Link */}
//             <a onClick={() => navigate("/eligibility")} className="header-link">
//               Eligibility
//             </a>
//           </div>
//         </div>
//         <div className="header-right">
//           <div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
//             <img src={loggedInUser.profileImage} alt="Profile" className="profile-image" />
//             <div className="user-info">
//               <span className="user-name">{loggedInUser.name}</span>
//               <span className="user-role">{loggedInUser.role}</span>
//             </div>
//             {/* Profile Dropdown */}
//             {isProfileDropdownOpen && (
//               <div className="profile-dropdown">
//                 <button className="logout-button" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Side Navigation Bar */}
//       <div className={`side-nav ${isSideNavOpen ? "open" : ""}`}>
//         <h2>Loan Management</h2>
//         <ul>
//           <li
//             className={activeSection === "dashboard" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("dashboard");
//               setIsSideNavOpen(false); // Close side nav after selection
//             }}
//           >
//             Dashboard
//           </li>
//           <li
//             className={activeSection === "users" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("users");
//               setIsSideNavOpen(false);
//             }}
//           >
//             Users
//           </li>
//           <li
//             className={activeSection === "roles" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("roles");
//               setIsSideNavOpen(false);
//             }}
//           >
//             Roles
//           </li>
//           <li
//             className={activeSection === "loan_applications" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("loan_applications");
//               setIsSideNavOpen(false);
//             }}
//           >
//             Loan Applications
//           </li>
//           <li
//             className={activeSection === "loan_approvals" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("loan_approvals");
//               setIsSideNavOpen(false);
//             }}
//           >
//             Loan Approvals
//           </li>
//           <li
//             className={activeSection === "documents" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("documents");
//               setIsSideNavOpen(false);
//             }}
//           >
//             Documents
//           </li>
//           <li
//             className={activeSection === "transactions" ? "active" : ""}
//             onClick={() => {
//               setActiveSection("transactions");
//               setIsSideNavOpen(false);
//             }}
//           >
//             Transactions
//           </li>
//         </ul>
//       </div>

//       {/* Main Content Area */}
//       <div className="content">{renderMainContent()}</div>
//     </div>
//   );
// };

// export default UserDashboard;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./UserDashboard.css"; // Import the CSS file
import User from "../../../assets/pictures/User.jpg";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isSideNavOpen, setIsSideNavOpen] = useState(false); // State to manage side nav visibility
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State to manage profile dropdown
  const navigate = useNavigate(); // Initialize useNavigate

  // Get logged-in user data from localStorage
  const username = localStorage.getItem('username') || 'Guest';

  // Updated loggedInUser object
  const loggedInUser = {
    name: username, // Use the username from localStorage instead of "Angela"
    role: "User",
    profileImage: "https://cdn-icons-png.flaticon.com/512/0/93.png" // Default profile image
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate("/");
  };

  // Sample data for the dashboard
  const dashboardData = {
    totalLoans: 125,
    activeLoans: 85,
    overdueLoans: 12,
    totalRevenue: "$250,000",
  };

  // Render the main content based on the active section
  const renderMainContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="main-content">
            <h2>Dashboard Overview</h2>
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
          </div>
        );
      case "users":
        return (
          <div className="main-content">
            <h2>Manage Users</h2>
            <p>View and manage all users in the system.</p>
          </div>
        );
      case "roles":
        return (
          <div className="main-content">
            <h2>Manage Roles</h2>
            <p>View and manage user roles and permissions.</p>
          </div>
        );
      case "loan_applications":
        return (
          <div className="main-content">
            <h2>Loan Applications</h2>
            <p>View and process loan applications.</p>
          </div>
        );
      case "loan_approvals":
        return (
          <div className="main-content">
            <h2>Loan Approvals</h2>
            <p>Review and approve loan applications.</p>
          </div>
        );
      case "documents":
        return (
          <div className="main-content">
            <h2>Documents</h2>
            <p>Manage and view uploaded documents.</p>
          </div>
        );
      case "transactions":
        return (
          <div className="main-content">
            <h2>Transactions</h2>
            <p>View and manage all transactions.</p>
          </div>
        );
      default:
        return (
          <div className="main-content">
            <h2>Dashboard Overview</h2>
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
          </div>
        );
    }
  };

  return (
    <div className="user-dashboard">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <button className="menu-button" onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
            ☰
          </button>
          <div className="header-links">
            <a onClick={() => navigate("/loan-application")} className="header-link">
              Apply for Loan
            </a>
            <a onClick={() => navigate("/emi-calculator")} className="header-link">
              EMI Calculator
            </a>
            <a onClick={() => navigate("/eligibility")} className="header-link">
              Eligibility
            </a>
            {/* Add FAQs Link */}
            <a onClick={() => navigate("/faqs")} className="header-link">
              FAQs
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
            <img src={loggedInUser.profileImage} alt="Profile" className="profile-image" />
            <div className="user-info">
              <span className="user-name">{loggedInUser.name}</span>
              <span className="user-role">{loggedInUser.role}</span>
            </div>
            {/* Profile Dropdown */}
            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Side Navigation Bar */}
      <div className={`side-nav ${isSideNavOpen ? "open" : ""}`}>
        <h2>Loan Management</h2>
        <ul>
          <li
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => {
              setActiveSection("dashboard");
              setIsSideNavOpen(false); // Close side nav after selection
            }}
          >
            Dashboard
          </li>
          <li
            className={activeSection === "users" ? "active" : ""}
            onClick={() => {
              setActiveSection("users");
              setIsSideNavOpen(false);
            }}
          >
            Users
          </li>
          <li
            className={activeSection === "roles" ? "active" : ""}
            onClick={() => {
              setActiveSection("roles");
              setIsSideNavOpen(false);
            }}
          >
            Roles
          </li>
          <li
            className={activeSection === "loan_applications" ? "active" : ""}
            onClick={() => {
              setActiveSection("loan_applications");
              setIsSideNavOpen(false);
            }}
          >
            Loan Applications
          </li>
          <li
            className={activeSection === "loan_approvals" ? "active" : ""}
            onClick={() => {
              setActiveSection("loan_approvals");
              setIsSideNavOpen(false);
            }}
          >
            Loan Approvals
          </li>
          <li
            className={activeSection === "documents" ? "active" : ""}
            onClick={() => {
              setActiveSection("documents");
              setIsSideNavOpen(false);
            }}
          >
            Documents
          </li>
          <li
            className={activeSection === "transactions" ? "active" : ""}
            onClick={() => {
              setActiveSection("transactions");
              setIsSideNavOpen(false);
            }}
          >
            Transactions
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="content">{renderMainContent()}</div>
    </div>
  );
};

export default UserDashboard;