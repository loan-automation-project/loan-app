// import React from "react";
// import "./PendingApplications.css"; // Import the CSS file

// const PendingApplications = () => {
//   // Sample data for pending loan applications
//   const pendingApplications = [
//     {
//       id: 1,
//       name: "John Doe",
//       loanType: "Personal Loan",
//       applicationId: "APP123456",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       loanType: "Home Loan",
//       applicationId: "APP789012",
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       loanType: "Car Loan",
//       applicationId: "APP345678",
//     },
//     {
//       id: 4,
//       name: "Bob Brown",
//       loanType: "Gold Loan",
//       applicationId: "APP901234",
//     },
//   ];

//   // Handle view button click
//   const handleView = (applicationId) => {
//     alert(`Viewing application with ID: ${applicationId}`);
//     // You can add navigation or further logic here
//   };

//   return (
//     <div className="pending-applications-container">
//       <h2>Pending Loan Applications</h2>
//       <table className="applications-table">
//         <thead>
//           <tr>
//             <th>S.no</th>
//             <th>Name</th>
//             <th>Loan Type</th>
//             <th>Application ID</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pendingApplications.map((application, index) => (
//             <tr key={application.id}>
//               <td>{index + 1}</td>
//               <td>{application.name}</td>
//               <td>{application.loanType}</td>
//               <td>{application.applicationId}</td>
//               <td>
//                 <button
//                   className="view-button"
//                   onClick={() => handleView(application.applicationId)}
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PendingApplications;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PendingApplications.css";

// const PendingApplications = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   // Sample data for pending loan applications
//   const pendingApplications = [
//     {
//       id: 1,
//       name: "John Doe",
//       loanType: "Personal Loan",
//       applicationId: "APP123456",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       loanType: "Home Loan",
//       applicationId: "APP789012",
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       loanType: "Car Loan",
//       applicationId: "APP345678",
//     },
//     {
//       id: 4,
//       name: "Bob Brown",
//       loanType: "Gold Loan",
//       applicationId: "APP901234",
//     },
//   ];

//   const handleBack = () => {
//     navigate("/admin-dashboard");
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleView = (applicationId) => {
//     alert(`Viewing application with ID: ${applicationId}`);
//     // Add navigation or further logic here
//   };

//   return (
//     <div className="loan-application-container">
//       {/* Header */}
//       <div className="header">
//         <button className="back-button" onClick={handleBack}>
//           &larr; Back
//         </button>

//         <div
//           className="profile-section"
//           onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//         >
//           <img
//             src="/api/placeholder/40/40"
//             alt="Profile"
//             className="profile-image"
//           />
//           {isProfileDropdownOpen && (
//             <div className="profile-dropdown">
//               <button className="logout-button" onClick={handleLogout}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="loan-application-form">
//         <h2>Pending Loan Applications</h2>
//         <div className="table-container">
//           <table className="applications-table">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Loan Type</th>
//                 <th>Application ID</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingApplications.map((application, index) => (
//                 <tr key={application.id}>
//                   <td>{index + 1}</td>
//                   <td>{application.name}</td>
//                   <td>{application.loanType}</td>
//                   <td>{application.applicationId}</td>
//                   <td>
//                     <button
//                       className="view-button"
//                       onClick={() => handleView(application.applicationId)}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default PendingApplications;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PendingApplications.css";

const PendingApplications = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Sample data for pending loan applications
  const pendingApplications = [
    {
      id: 1,
      name: "John Doe",
      loanType: "Personal Loan",
      applicationId: "APP123456",
    },
    {
      id: 2,
      name: "Jane Smith",
      loanType: "Home Loan",
      applicationId: "APP789012",
    },
    {
      id: 3,
      name: "Alice Johnson",
      loanType: "Car Loan",
      applicationId: "APP345678",
    },
    {
      id: 4,
      name: "Bob Brown",
      loanType: "Gold Loan",
      applicationId: "APP901234",
    },
  ];

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const handleView = (applicationId) => {
    navigate("/applicant-details");
  };

  return (
    <div className="loan-application-container">
      {/* Header */}
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          &larr; Back
        </button>

        <div
          className="profile-section"
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
        >
          <img
            src="/api/placeholder/40/40"
            alt="Profile"
            className="profile-image"
          />
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="loan-application-form">
        <h2>Pending Loan Applications</h2>
        <div className="table-container">
          <table className="applications-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Loan Type</th>
                <th>Application ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingApplications.map((application, index) => (
                <tr key={application.id}>
                  <td>{index + 1}</td>
                  <td>{application.name}</td>
                  <td>{application.loanType}</td>
                  <td>{application.applicationId}</td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() => handleView(application.applicationId)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PendingApplications;