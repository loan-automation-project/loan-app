

// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // For navigation
// import "./LoanApplicationForm.css"; // Import the same CSS file

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: false,
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     });
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Documents Submitted:", formData);
//     // You can add API call or further processing here
//   };

//   return (
//     <div className="loan-application-container">
//       {/* Header */}
//       <div className="header">
//         <button className="back-button" onClick={() => window.history.back()}>
//           &larr; Back
//         </button>

//         <div
//           className="profile-section"
//           onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//         >
//           <img
//             src="" // Placeholder image URL
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

//       {/* Documents Form */}
//       <form onSubmit={handleSubmit} className="loan-application-form">
//         <h2>Documents</h2>

//         {/* Identity Proof */}
//         <div>
//           <label>Identity Proof:</label>
//           <select
//             name="identity_proof_type"
//             value={formData.identity_proof_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Aadhar">Aadhar</option>
//             <option value="Passport">Passport</option>
//           </select>
//           <input
//             type="file"
//             name="identity_proof_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* PAN Card */}
//         <div>
//           <label>PAN Card:</label>
//           <input
//             type="file"
//             name="pan_card_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Income Proof */}
//         <div>
//           <label>Income Proof:</label>
//           <input
//             type="file"
//             name="income_proof_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Bank Statements */}
//         <div>
//           <label>Bank Statements:</label>
//           <input
//             type="file"
//             name="bank_statements_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Employee Checkbox */}
//         <div>
//           <label>
//             Are you an employee?
//             <input
//               type="checkbox"
//               name="is_employee"
//               checked={formData.is_employee}
//               onChange={handleChange}
//             />
//           </label>
//           {formData.is_employee && (
//             <div>
//               <label>Employment Proof:</label>
//               <input
//                 type="file"
//                 name="employment_proof_file"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
//         </div>

//         {/* Picture */}
//         <div>
//           <label>Picture:</label>
//           <input
//             type="file"
//             name="picture_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Loan-Specific Documents */}
//         <div>
//           <label>Loan-Specific Documents:</label>
//           <input
//             type="file"
//             name="loan_specific_documents_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Asset-related Documents */}
//         <div>
//           <label>Asset Type:</label>
//           <input
//             type="text"
//             name="asset_type"
//             value={formData.asset_type}
//             onChange={handleChange}
//             placeholder="Enter asset type (e.g., Car, House)"
//             required
//           />
//           <label>Asset Document:</label>
//           <input
//             type="file"
//             name="asset_document_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit Documents</button>
//       </form>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;





// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // For navigation
// import "./LoanApplicationForm.css"; // Import the same CSS file

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: "", // Changed to string to handle dropdown value
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Documents Submitted:", formData);
//     // You can add API call or further processing here
//   };

//   return (
//     <div className="loan-application-container">
//       {/* Header */}
//       <div className="header">
//         <button className="back-button" onClick={() => window.history.back()}>
//           &larr; Back
//         </button>

//         <div
//           className="profile-section"
//           onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
//         >
//           <img
//             src="" // Placeholder image URL
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

//       {/* Documents Form */}
//       <form onSubmit={handleSubmit} className="loan-application-form">
//         <h2>Documents</h2>

//         {/* Identity Proof */}
//         <div>
//           <label>Identity Proof:</label>
//           <select
//             name="identity_proof_type"
//             value={formData.identity_proof_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Aadhar">Aadhar</option>
//             <option value="Passport">Passport</option>
//           </select>
//           <input
//             type="file"
//             name="identity_proof_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* PAN Card */}
//         <div>
//           <label>PAN Card:</label>
//           <input
//             type="file"
//             name="pan_card_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Income Proof */}
//         <div>
//           <label>Income Proof:</label>
//           <input
//             type="file"
//             name="income_proof_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Bank Statements */}
//         <div>
//           <label>Bank Statements:</label>
//           <input
//             type="file"
//             name="bank_statements_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Employee Dropdown */}
//         <div>
//           <label>Are you an employee?</label>
//           <select
//             name="is_employee"
//             value={formData.is_employee}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {formData.is_employee === "yes" && (
//             <div>
//               <label>Employment Proof:</label>
//               <input
//                 type="file"
//                 name="employment_proof_file"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
//         </div>

//         {/* Picture */}
//         <div>
//           <label>Picture:</label>
//           <input
//             type="file"
//             name="picture_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Loan-Specific Documents */}
//         <div>
//           <label>Loan-Specific Documents:</label>
//           <input
//             type="file"
//             name="loan_specific_documents_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Asset-related Documents */}
//         <div>
//           <label>Asset Type:</label>
//           <input
//             type="text"
//             name="asset_type"
//             value={formData.asset_type}
//             onChange={handleChange}
//             placeholder="Enter asset type (e.g., Car, House)"
//             required
//           />
//           <label>Asset Document:</label>
//           <input
//             type="file"
//             name="asset_document_file"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit Documents</button>
//       </form>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoanApplicationForm.css"; // Import the same CSS file

const Documents = () => {
  const [formData, setFormData] = useState({
    identity_proof_type: "",
    identity_proof_file: null,
    pan_card_file: null,
    income_proof_file: null,
    bank_statements_file: null,
    is_employee: "", // Changed to string to handle dropdown value
    employment_proof_file: null,
    picture_file: null,
    loan_specific_documents_file: null,
    asset_type: "",
    asset_document_file: null,
  });

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Documents Submitted:", formData);
    // You can add API call or further processing here
  };

  const handleBack = () => {
    navigate("/user-dashboard"); // Redirect to user-dashboard
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
            src="" // Placeholder image URL
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

      {/* Documents Form */}
      <form onSubmit={handleSubmit} className="loan-application-form">
        <h2>Documents</h2>

        {/* Identity Proof */}
        <div>
          <label>Identity Proof:</label>
          <select
            name="identity_proof_type"
            value={formData.identity_proof_type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Aadhar">Aadhar</option>
            <option value="Passport">Passport</option>
          </select>
          <input
            type="file"
            name="identity_proof_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* PAN Card */}
        <div>
          <label>PAN Card:</label>
          <input
            type="file"
            name="pan_card_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* Income Proof */}
        <div>
          <label>Income Proof:</label>
          <input
            type="file"
            name="income_proof_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* Bank Statements */}
        <div>
          <label>Bank Statements:</label>
          <input
            type="file"
            name="bank_statements_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* Employee Dropdown */}
        <div>
          <label>Are you an employee?</label>
          <select
            name="is_employee"
            value={formData.is_employee}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {formData.is_employee === "yes" && (
            <div>
              <label>Employment Proof:</label>
              <input
                type="file"
                name="employment_proof_file"
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        {/* Picture */}
        <div>
          <label>Picture:</label>
          <input
            type="file"
            name="picture_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* Loan-Specific Documents */}
        <div>
          <label>Loan-Specific Documents:</label>
          <input
            type="file"
            name="loan_specific_documents_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* Asset-related Documents */}
        <div>
          <label>Asset Type:</label>
          <input
            type="text"
            name="asset_type"
            value={formData.asset_type}
            onChange={handleChange}
            placeholder="Enter asset type (e.g., Car, House)"
            required
          />
          <label>Asset Document:</label>
          <input
            type="file"
            name="asset_document_file"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Documents</button>
      </form>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Documents;