

// import React from "react";
// import "./EligibilityCriteria.css"; // Import the CSS file for styling

// const EligibilityCriteria = () => {
//   return (
//     <div className="eligibility-card">
//       <h2>Loan Eligibility Criteria</h2>
//       <p>To be eligible for a loan, you must meet the following criteria:</p>
//       <ul>
//         <li>
//           <strong>Age:</strong> You must be between 21 and 60 years old.
//         </li>
//         <li>
//           <strong>Income:</strong> You must have a minimum monthly income of ₹25,000.
//         </li>
//         <li>
//           <strong>Credit Score:</strong> You must have a credit score of 650 or higher.
//         </li>
//         <li>
//           <strong>Employment:</strong> You must be employed for at least 1 year or self-employed for 2 years.
//         </li>
//         <li>
//           <strong>Documents:</strong> You must provide valid identification, proof of income, and address proof.
//         </li>
//         <li>
//           <strong>Loan Amount:</strong> The loan amount requested must be within the permissible limits based on your income.
//         </li>
//       </ul>
//       <p>
//         If you meet these criteria, you can proceed with your loan application.
//       </p>
//     </div>
//   );
// };

// export default EligibilityCriteria;



// import React, { useState } from "react";
// import "./EligibilityCriteria.css"; // Import the CSS file for styling

// const EligibilityCriteria = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   return (
//     <div className="eligibility-criteria-container">
//       {/* Header */}
//       <div className="header">
//         {/* Back Button */}
//         <button className="back-button" onClick={() => window.location.href = "/user-dashboard"}>
//           &larr; Back
//         </button>

//         {/* Profile Section */}
//         {/* <div className="profile-section" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
//           <img
//             src="https://via.placeholder.com/40" // Placeholder image URL
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
//         </div> */}
//       </div>

//       {/* Eligibility Criteria Content */}
//       <div className="eligibility-card">
//         <h2>Loan Eligibility Criteria</h2>
//         <p>To be eligible for a loan, you must meet the following criteria:</p>
//         <ul>
//           <li>
//             <strong>Age:</strong> You must be between 21 and 60 years old.
//           </li>
//           <li>
//             <strong>Income:</strong> You must have a minimum monthly income of ₹25,000.
//           </li>
//           <li>
//             <strong>Credit Score:</strong> You must have a credit score of 650 or higher.
//           </li>
//           <li>
//             <strong>Employment:</strong> You must be employed for at least 1 year or self-employed for 2 years.
//           </li>
//           <li>
//             <strong>Documents:</strong> You must provide valid identification, proof of income, and address proof.
//           </li>
//           <li>
//             <strong>Loan Amount:</strong> The loan amount requested must be within the permissible limits based on your income.
//           </li>
//         </ul>
//         <p>
//           If you meet these criteria, you can proceed with your loan application.
//         </p>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default EligibilityCriteria;






import React from 'react';
import './EligibilityCriteria.css';

const EligibilityCriteria = () => {
  const criteria = [
    {
      title: "Age Requirement",
      description: "You must be between 21 and 60 years old.",
      icon: "👤"
    },
    {
      title: "Income Requirement",
      description: "You must have a minimum monthly income of ₹25,000.",
      icon: "💰"
    },
    {
      title: "Credit Score",
      description: "You must have a credit score of 650 or higher.",
      icon: "📊"
    },
    {
      title: "Employment Status",
      description: "You must be employed for at least 1 year or self-employed for 2 years.",
      icon: "💼"
    },
    {
      title: "Required Documents",
      description: "You must provide valid identification, proof of income, and address proof.",
      icon: "📄"
    },
    {
      title: "Loan Amount",
      description: "The loan amount requested must be within the permissible limits based on your income.",
      icon: "💵"
    }
  ];

  return (
    <div>
      <div className="header">
        {/* Back Button */}
        <button className="back-button" onClick={() => window.location.href = "/user-dashboard"}>
          &larr; Back
        </button>
      </div>
      <div className="eligibility-container">



        <div className="main-card">
          <div className="card-header">
            <h2 className="card-title">Loan Eligibility Criteria</h2>
          </div>
          <div className="card-content">
            <p className="intro-text">
              To be eligible for a loan, you must meet the following criteria:
            </p>
            <div className="criteria-grid">
              {criteria.map((item, index) => (
                <div key={index} className="criteria-card">
                  <div className="criteria-content">
                    <span className="criteria-icon">{item.icon}</span>
                    <div className="criteria-text">
                      <h3 className="criteria-title">{item.title}</h3>
                      <p className="criteria-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="footer-text">
              If you meet these criteria, you can proceed with your loan application.
            </p>



          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EligibilityCriteria;