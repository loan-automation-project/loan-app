
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









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PendingApplications.css";

// const PendingApplications = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [pendingApplications, setPendingApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPendingApplications();
//   }, []);

//   const fetchPendingApplications = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:1093/application/pending'); // Replace with your actual API endpoint
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch applications');
//       }

//       const data = await response.json();
//       setPendingApplications(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate("/admin-dashboard");
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleView = (loanId) => {
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
//           {loading ? (
//             <div className="loading-message">Loading applications...</div>
//           ) : error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <table className="applications-table">
//               <thead>
//                 <tr>
//                   <th>S.no</th>
//                   <th>Name</th>
//                   <th>Loan Type</th>
//                   <th>Application ID</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pendingApplications.length > 0 ? (
//                   pendingApplications.map((application, index) => (
//                     <tr key={application.id}>
//                       <td>{index + 1}</td>
//                       <td>{application.fullName}</td>
//                       <td>{application.loanType}</td>
//                       <td>{application.loanId}</td>
//                       <td>
//                         <button
//                           className="view-button"
//                           onClick={() => handleView(application.loanId)}
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="no-applications">
//                       No pending applications found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default PendingApplications;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PendingApplications.css";

// const PendingApplications = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [pendingApplications, setPendingApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPendingApplications();
//   }, []);

//   const fetchPendingApplications = async () => {
//     try {
//       setLoading(true);
//       const jwtToken = localStorage.getItem('token'); // Get JWT token
//       const response = await fetch('http://localhost:1093/application/pending', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${jwtToken}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch applications');
//       }

//       const data = await response.json();
//       setPendingApplications(data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching pending applications:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate("/admin-dashboard");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the token on logout
//     navigate('/login'); // Navigate to login page
//   };

//   const handleView = (loanId) => {
//     // Pass the loanId to the applicant details page
//     navigate(`/applicant-details/${loanId}`);
//   };

//   if (loading) {
//     return <div className="loading-container">Loading applications...</div>;
//   }

//   if (error) {
//     return <div className="error-container">Error: {error}</div>;
//   }

//   return (
//     <div className="loan-application-container">
//       <div className="header">
//         <button className="back-button" onClick={handleBack}>
//           &larr; Back
//         </button>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>

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
//                 <th>Amount</th>
//                 <th>Contact Info</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingApplications.length > 0 ? (
//                 pendingApplications.map((application, index) => (
//                   <tr key={application.loanId}>
//                     <td>{index + 1}</td>
//                     <td>{application.fullName}</td>
//                     <td>{application.loanType}</td>
//                     <td>{application.loanId}</td>
//                     <td>₹{application.loanAmount?.toLocaleString()}</td>
//                     <td>{application.contactInfo}</td>
//                     <td>
//                       <button
//                         className="view-button"
//                         onClick={() => handleView(application.loanId)}
//                       >
//                         View Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="no-applications">
//                     No pending applications found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <footer className="footer">
//         <p>&copy; 2025 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default PendingApplications;









import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PendingApplications.css";

const PendingApplications = () => {
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
      const jwtToken = localStorage.getItem('token');
      const response = await fetch('http://localhost:8060/application/pending', {
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }
      });
      
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

  const handleView = (loanId) => {
    navigate(`/applicant-details/${loanId}`);
  };

  return (
    <div className="loan-application-container">
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          &larr; Back
        </button>
      </div>

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
                    <tr key={application.loanId}>
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

      <footer className="footer">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PendingApplications;