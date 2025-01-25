

// import React, { useState } from "react";
// import "./LoanApplicationForm.css"; // Import the CSS file

// const LoanApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     loan_id: "",
//     loan_type: "",
//     full_name: "",
//     date_of_birth: "",
//     gender: "",
//     martial_status: "",
//     contact_info: "",
//     address: "",
//     employement_details: [],
//     financial_info: [],
//     assets: [],
//     references: [],
//     loan_amount: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleArrayChange = (e, field, index) => {
//     const { value } = e.target;
//     const updatedArray = [...formData[field]];
//     updatedArray[index] = value;
//     setFormData({
//       ...formData,
//       [field]: updatedArray,
//     });
//   };

//   const addArrayField = (field) => {
//     setFormData({
//       ...formData,
//       [field]: [...formData[field], ""],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // You can add API call or further processing here
//   };

//   return (
//     <form onSubmit={handleSubmit} className="loan-application-form">
//       <h2>Loan Application Form</h2>

//       {/* Basic Information */}
//       <div>
//         <label>Loan ID:</label>
//         <input
//           type="text"
//           name="loan_id"
//           value={formData.loan_id}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Loan Type:</label>
//         <input
//           type="text"
//           name="loan_type"
//           value={formData.loan_type}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Full Name:</label>
//         <input
//           type="text"
//           name="full_name"
//           value={formData.full_name}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Date of Birth:</label>
//         <input
//           type="date"
//           name="date_of_birth"
//           value={formData.date_of_birth}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Gender:</label>
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       <div>
//         <label>Martial Status:</label>
//         <input
//           type="text"
//           name="martial_status"
//           value={formData.martial_status}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Contact Info:</label>
//         <input
//           type="text"
//           name="contact_info"
//           value={formData.contact_info}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Address:</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {/* Employment Details (Array) */}
//       <div className="array-field">
//         <label>Employment Details:</label>
//         {formData.employement_details.map((detail, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={detail}
//               onChange={(e) => handleArrayChange(e, "employement_details", index)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={() => addArrayField("employement_details")}>
//           Add Employment Detail
//         </button>
//       </div>

//       {/* Financial Info (Array) */}
//       <div className="array-field">
//         <label>Financial Info:</label>
//         {formData.financial_info.map((info, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={info}
//               onChange={(e) => handleArrayChange(e, "financial_info", index)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={() => addArrayField("financial_info")}>
//           Add Financial Info
//         </button>
//       </div>

//       {/* Assets (Array) */}
//       <div className="array-field">
//         <label>Assets:</label>
//         {formData.assets.map((asset, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={asset}
//               onChange={(e) => handleArrayChange(e, "assets", index)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={() => addArrayField("assets")}>
//           Add Asset
//         </button>
//       </div>

//       {/* References (Array) */}
//       <div className="array-field">
//         <label>References:</label>
//         {formData.references.map((reference, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={reference}
//               onChange={(e) => handleArrayChange(e, "references", index)}
//               required
//             />
//           </div>
//         ))}
//         <button type="button" onClick={() => addArrayField("references")}>
//           Add Reference
//         </button>
//       </div>

//       {/* Loan Amount */}
//       <div>
//         <label>Loan Amount:</label>
//         <input
//           type="number"
//           name="loan_amount"
//           value={formData.loan_amount}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {/* Submit Button */}
//       <button type="submit">Submit Application</button>
//     </form>
//   );
// };

// export default LoanApplicationForm;





// import React, { useState } from "react";
// import "./LoanApplicationForm.css"; // Import the CSS file

// const LoanApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     loan_id: "",
//     loan_type: "",
//     full_name: "",
//     date_of_birth: "",
//     gender: "",
//     martial_status: "",
//     contact_info: "",
//     address: "",
//     employement_details: [],
//     financial_info: [],
//     assets: [],
//     references: [],
//     loan_amount: "",
//   });

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleArrayChange = (e, field, index) => {
//     const { value } = e.target;
//     const updatedArray = [...formData[field]];
//     updatedArray[index] = value;
//     setFormData({
//       ...formData,
//       [field]: updatedArray,
//     });
//   };

//   const addArrayField = (field) => {
//     setFormData({
//       ...formData,
//       [field]: [...formData[field], ""],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // You can add API call or further processing here
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   return (
//     <div className="loan-application-container">
//       {/* Header */}
//       <div className="header">
//         {/* Back Button */}
//         <button className="back-button" onClick={() => window.history.back()}>
//           &larr; Back
//         </button>

//         {/* Profile Section */}
//         <div className="profile-section" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
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
//         </div>
//       </div>

//       {/* Loan Application Form */}
//       <form onSubmit={handleSubmit} className="loan-application-form">
//         <h2>Loan Application Form</h2>

//         {/* Basic Information */}
//         <div>
//           <label>Loan ID:</label>
//           <input
//             type="text"
//             name="loan_id"
//             value={formData.loan_id}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Loan Type:</label>
//           <input
//             type="text"
//             name="loan_type"
//             value={formData.loan_type}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="full_name"
//             value={formData.full_name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="date_of_birth"
//             value={formData.date_of_birth}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Gender:</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label>Martial Status:</label>
//           <input
//             type="text"
//             name="martial_status"
//             value={formData.martial_status}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Contact Info:</label>
//           <input
//             type="text"
//             name="contact_info"
//             value={formData.contact_info}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Employment Details (Array) */}
//         <div className="array-field">
//           <label>Employment Details:</label>
//           {formData.employement_details.map((detail, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={detail}
//                 onChange={(e) => handleArrayChange(e, "employement_details", index)}
//                 required
//               />
//             </div>
//           ))}
//           <button type="button" onClick={() => addArrayField("employement_details")}>
//             Add Employment Detail
//           </button>
//         </div>

//         {/* Financial Info (Array) */}
//         <div className="array-field">
//           <label>Financial Info:</label>
//           {formData.financial_info.map((info, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={info}
//                 onChange={(e) => handleArrayChange(e, "financial_info", index)}
//                 required
//               />
//             </div>
//           ))}
//           <button type="button" onClick={() => addArrayField("financial_info")}>
//             Add Financial Info
//           </button>
//         </div>

//         {/* Assets (Array) */}
//         <div className="array-field">
//           <label>Assets:</label>
//           {formData.assets.map((asset, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={asset}
//                 onChange={(e) => handleArrayChange(e, "assets", index)}
//                 required
//               />
//             </div>
//           ))}
//           <button type="button" onClick={() => addArrayField("assets")}>
//             Add Asset
//           </button>
//         </div>

//         {/* References (Array) */}
//         <div className="array-field">
//           <label>References:</label>
//           {formData.references.map((reference, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={reference}
//                 onChange={(e) => handleArrayChange(e, "references", index)}
//                 required
//               />
//             </div>
//           ))}
//           <button type="button" onClick={() => addArrayField("references")}>
//             Add Reference
//           </button>
//         </div>

//         {/* Loan Amount */}
//         <div>
//           <label>Loan Amount:</label>
//           <input
//             type="number"
//             name="loan_amount"
//             value={formData.loan_amount}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit Application</button>
//       </form>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LoanApplicationForm;



import React, { useState } from "react";
import "./LoanApplicationForm.css"; // Import the CSS file

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    loan_id: "",
    loan_type: "",
    full_name: "",
    date_of_birth: "",
    gender: "",
    martial_status: "",
    contact_info: "",
    address: "",
    employement_details: [],
    financial_info: [],
    assets: [],
    references: [],
    loan_amount: "",
  });

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleArrayChange = (e, field, index) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({
      ...formData,
      [field]: updatedArray,
    });
  };

  const addArrayField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add API call or further processing here
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  return (
    <div className="loan-application-container">
      {/* Header */}
      <div className="header">
        {/* Back Button */}
        <button className="back-button" onClick={() => window.history.back()}>
          &larr; Back
        </button>

        {/* Profile Section */}
        <div className="profile-section" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
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

      {/* Loan Application Form */}
      <form onSubmit={handleSubmit} className="loan-application-form">
        <h2>Loan Application Form</h2>

        {/* Basic Information */}
        <div>
          <label>Loan ID:</label>
          <input
            type="text"
            name="loan_id"
            value={formData.loan_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Loan Type:</label>
          <input
            type="text"
            name="loan_type"
            value={formData.loan_type}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Martial Status:</label>
          <input
            type="text"
            name="martial_status"
            value={formData.martial_status}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contact Info:</label>
          <input
            type="text"
            name="contact_info"
            value={formData.contact_info}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Employment Details (Array) */}
        <div className="array-field">
          <label>Employment Details:</label>
          {formData.employement_details.map((detail, index) => (
            <div key={index}>
              <input
                type="text"
                value={detail}
                onChange={(e) => handleArrayChange(e, "employement_details", index)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrayField("employement_details")}>
            Add Employment Detail
          </button>
        </div>

        {/* Financial Info (Array) */}
        <div className="array-field">
          <label>Financial Info:</label>
          {formData.financial_info.map((info, index) => (
            <div key={index}>
              <input
                type="text"
                value={info}
                onChange={(e) => handleArrayChange(e, "financial_info", index)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrayField("financial_info")}>
            Add Financial Info
          </button>
        </div>

        {/* Assets (Array) */}
        <div className="array-field">
          <label>Assets:</label>
          {formData.assets.map((asset, index) => (
            <div key={index}>
              <input
                type="text"
                value={asset}
                onChange={(e) => handleArrayChange(e, "assets", index)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrayField("assets")}>
            Add Asset
          </button>
        </div>

        {/* References (Array) */}
        <div className="array-field">
          <label>References:</label>
          {formData.references.map((reference, index) => (
            <div key={index}>
              <input
                type="text"
                value={reference}
                onChange={(e) => handleArrayChange(e, "references", index)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addArrayField("references")}>
            Add Reference
          </button>
        </div>

        {/* Loan Amount */}
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            name="loan_amount"
            value={formData.loan_amount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Application</button>
      </form>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoanApplicationForm;