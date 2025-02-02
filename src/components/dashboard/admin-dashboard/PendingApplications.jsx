
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
//     navigate("/applicant-details");
//   };

//   return (
//     <div className="loan-application-container">
//       {/* Header */}
//       <div className="header">
//         <button className="back-button" onClick={handleBack}>
//           &larr; Back
//         </button>
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









import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PendingApplications.css";

const PendingApplications = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [pendingApplications, setPendingApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPendingApplications();
  }, []);

  const fetchPendingApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:1093/application/pending'); // Replace with your actual API endpoint
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }

      const data = await response.json();
      setPendingApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const handleView = (loanId) => {
    navigate("/applicant-details");
  };

  return (
    <div className="loan-application-container">
      {/* Header */}
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          &larr; Back
        </button>


      </div>

      {/* Main Content */}
      <div className="loan-application-form">
        <h2>Pending Loan Applications</h2>
        <div className="table-container">
          {loading ? (
            <div className="loading-message">Loading applications...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
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
                {pendingApplications.length > 0 ? (
                  pendingApplications.map((application, index) => (
                    <tr key={application.id}>
                      <td>{index + 1}</td>
                      <td>{application.fullName}</td>
                      <td>{application.loanType}</td>
                      <td>{application.loanId}</td>
                      <td>
                        <button
                          className="view-button"
                          onClick={() => handleView(application.loanId)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-applications">
                      No pending applications found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PendingApplications;