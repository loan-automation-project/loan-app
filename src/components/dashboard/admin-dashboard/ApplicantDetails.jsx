// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./ApplicantDetails.css";

// const ApplicantDetails = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const { applicationId } = useParams();

//   // Sample applicant data - Replace with actual data fetching
//   const applicantData = {
//     applicationId: "APP123456",
//     name: "John Doe",
//     loanType: "Personal Loan",
//     age: 32,
//     gender: "Male",
//     maritalStatus: "Married",
//     address: "123 Main Street, Apt 4B, New York, NY 10001",
//     email: "john.doe@email.com",
//     phone: "+1 (555) 123-4567",
//     occupation: "Software Engineer",
//     monthlyIncome: "$8,000",
//     loanAmount: "$50,000",
//     loanTenure: "5 years",
//     purpose: "Home renovation"
//   };

//   const handleBack = () => {
//     navigate("/pending-applications");
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleApprove = () => {
//     alert(`Application ${applicationId} approved`);
//     // Add your approval logic here
//   };

//   const handleReject = () => {
//     alert(`Application ${applicationId} rejected`);
//     // Add your rejection logic here
//   };

//   const handleDownload = () => {
//     alert(`Downloading documents for application ${applicationId}`);
//     // Add your document download logic here
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
//         <h2>Applicant Details</h2>
        
//         <div className="details-grid">
//           <div className="detail-group">
//             <label>Application ID</label>
//             <p>{applicantData.applicationId}</p>
//           </div>

//           <div className="detail-group">
//             <label>Name</label>
//             <p>{applicantData.name}</p>
//           </div>

//           <div className="detail-group">
//             <label>Loan Type</label>
//             <p>{applicantData.loanType}</p>
//           </div>

//           <div className="detail-group">
//             <label>Age</label>
//             <p>{applicantData.age}</p>
//           </div>

//           <div className="detail-group">
//             <label>Gender</label>
//             <p>{applicantData.gender}</p>
//           </div>

//           <div className="detail-group">
//             <label>Marital Status</label>
//             <p>{applicantData.maritalStatus}</p>
//           </div>

//           <div className="detail-group full-width">
//             <label>Address</label>
//             <p>{applicantData.address}</p>
//           </div>

//           <div className="detail-group">
//             <label>Email</label>
//             <p>{applicantData.email}</p>
//           </div>

//           <div className="detail-group">
//             <label>Phone</label>
//             <p>{applicantData.phone}</p>
//           </div>

//           <div className="detail-group">
//             <label>Occupation</label>
//             <p>{applicantData.occupation}</p>
//           </div>

//           <div className="detail-group">
//             <label>Monthly Income</label>
//             <p>{applicantData.monthlyIncome}</p>
//           </div>

//           <div className="detail-group">
//             <label>Loan Amount</label>
//             <p>{applicantData.loanAmount}</p>
//           </div>

//           <div className="detail-group">
//             <label>Loan Tenure</label>
//             <p>{applicantData.loanTenure}</p>
//           </div>

//           <div className="detail-group full-width">
//             <label>Purpose of Loan</label>
//             <p>{applicantData.purpose}</p>
//           </div>
//         </div>

//         <div className="action-buttons">
//           <button className="reject-button" onClick={handleReject}>
//             Reject
//           </button>
//           <button className="approve-button" onClick={handleApprove}>
//             Approve
//           </button>
//           <button className="download-button" onClick={handleDownload}>
//             Download Documents
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ApplicantDetails;




import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ApplicantDetails.css";

const ApplicantDetails = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { applicationId } = useParams();

  // Sample applicant data - Replace with actual data fetching
  const applicantData = {
    applicationId: "APP123456",
    name: "John Doe",
    loanType: "Personal Loan",
    age: 32,
    gender: "Male",
    maritalStatus: "Married",
    address: "123 Main Street, Apt 4B, New York, NY 10001",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    occupation: "Software Engineer",
    monthlyIncome: "$8,000",
    loanAmount: "$50,000",
    loanTenure: "5 years",
    purpose: "Home renovation"
  };

  const handleBack = () => {
    navigate("/pending-applications");
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const handleApprove = () => {
    navigate("/approve");
  };

  const handleReject = () => {
    alert(`Application ${applicationId} rejected`);
    // Add your rejection logic here
  };

  const handleDownload = () => {
    alert(`Downloading documents for application ${applicationId}`);
    // Add your document download logic here
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
        <h2>Applicant Details</h2>
        
        <div className="details-grid">
          <div className="detail-group">
            <label>Application ID</label>
            <p>{applicantData.applicationId}</p>
          </div>

          <div className="detail-group">
            <label>Name</label>
            <p>{applicantData.name}</p>
          </div>

          <div className="detail-group">
            <label>Loan Type</label>
            <p>{applicantData.loanType}</p>
          </div>

          <div className="detail-group">
            <label>Age</label>
            <p>{applicantData.age}</p>
          </div>

          <div className="detail-group">
            <label>Gender</label>
            <p>{applicantData.gender}</p>
          </div>

          <div className="detail-group">
            <label>Marital Status</label>
            <p>{applicantData.maritalStatus}</p>
          </div>

          <div className="detail-group full-width">
            <label>Address</label>
            <p>{applicantData.address}</p>
          </div>

          <div className="detail-group">
            <label>Email</label>
            <p>{applicantData.email}</p>
          </div>

          <div className="detail-group">
            <label>Phone</label>
            <p>{applicantData.phone}</p>
          </div>

          <div className="detail-group">
            <label>Occupation</label>
            <p>{applicantData.occupation}</p>
          </div>

          <div className="detail-group">
            <label>Monthly Income</label>
            <p>{applicantData.monthlyIncome}</p>
          </div>

          <div className="detail-group">
            <label>Loan Amount</label>
            <p>{applicantData.loanAmount}</p>
          </div>

          <div className="detail-group">
            <label>Loan Tenure</label>
            <p>{applicantData.loanTenure}</p>
          </div>

          <div className="detail-group full-width">
            <label>Purpose of Loan</label>
            <p>{applicantData.purpose}</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="reject-button" onClick={handleReject}>
            Reject
          </button>
          <button className="approve-button" onClick={handleApprove}>
            Approve
          </button>
          <button className="download-button" onClick={handleDownload}>
            Download Documents
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ApplicantDetails;