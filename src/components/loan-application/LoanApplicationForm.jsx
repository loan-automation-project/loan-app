













// import React, { useState } from "react";
// import "./LoanApplicationForm.css"; // Import the CSS file

// const LoanApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     loan_type: "",
//     full_name: "",
//     date_of_birth: "",
//     gender: "",
//     martial_status: "",
//     contact_number: "",
//     address: "",
//     employement_details: [],
//     references: [{ name: "", relation: "", contact_number: "", address: "" }],
//     loan_amount: "",
//   });

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
//   const [isEmploymentFieldVisible, setIsEmploymentFieldVisible] = useState(false); // State to toggle employment fields

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleEmploymentChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedEmploymentDetails = [...formData.employement_details];
//     updatedEmploymentDetails[index][name] = value;
//     setFormData({
//       ...formData,
//       employement_details: updatedEmploymentDetails,
//     });
//   };

//   const handleReferenceChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedReferences = [...formData.references];
//     updatedReferences[index][name] = value;
//     setFormData({
//       ...formData,
//       references: updatedReferences,
//     });
//   };

//   const addEmploymentDetail = () => {
//     setFormData({
//       ...formData,
//       employement_details: [
//         ...formData.employement_details,
//         { employer_name: "", job_title: "", employment_type: "" },
//       ],
//     });
//     setIsEmploymentFieldVisible(true);
//   };

//   const addReference = () => {
//     if (formData.references.length < 2) {
//       setFormData({
//         ...formData,
//         references: [
//           ...formData.references,
//           { name: "", relation: "", contact_number: "", address: "" },
//         ],
//       });
//     }
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

//       {/* Loan Application Form */}
//       <form onSubmit={handleSubmit} className="loan-application-form">
//         <h2>Loan Application Form</h2>

//         {/* Basic Information */}
//         <div>
//           <label>Loan Type:</label>
//           <select
//             name="loan_type"
//             value={formData.loan_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Personal Loan">Personal Loan</option>
//             <option value="Car Loan">Car Loan</option>
//             <option value="Home Loan">Home Loan</option>
//             <option value="Gold Loan">Gold Loan</option>
//           </select>
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
//           <label>Contact Number:</label>
//           <input
//             type="text"
//             name="contact_number"
//             value={formData.contact_number}
//             onChange={handleChange}
//             pattern="^\d{10}$"
//             maxLength="10"
//             placeholder="Enter 10-digit number"
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

//         {/* Employment Details */}
//         <div className="array-field">
//           <label>Employment Details:</label>
//           {!isEmploymentFieldVisible && (
//             <button type="button" onClick={addEmploymentDetail}>
//               Add Employment Detail
//             </button>
//           )}
//           {isEmploymentFieldVisible && (
//             <div>
//               {formData.employement_details.map((detail, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     name="employer_name"
//                     value={detail.employer_name}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Employer Name"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="job_title"
//                     value={detail.job_title}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Job Title"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="employment_type"
//                     value={detail.employment_type}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Employment Type"
//                     required
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* References */}
//         <div className="array-field">
//           <label>References:</label>
//           {formData.references.map((reference, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 name="name"
//                 value={reference.name}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 type="text"
//                 name="relation"
//                 value={reference.relation}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Relation"
//                 required
//               />
//               <input
//                 type="text"
//                 name="contact_number"
//                 value={reference.contact_number}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Contact Number"
//                 pattern="^\d{10}$"
//                 maxLength="10"
//                 required
//               />
//               <input
//                 type="text"
//                 name="address"
//                 value={reference.address}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Address"
//                 required
//               />
//             </div>
//           ))}
//         </div>

//         {/* Add References Button (Limited to 2 references) */}
//         {formData.references.length < 2 && (
//           <button type="button" onClick={addReference}>
//             Add Reference
//           </button>
//         )}

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






// import React, { useState } from "react";
// import "./LoanApplicationForm.css"; // Import the CSS file

// const LoanApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     loan_type: "",
//     full_name: "",
//     date_of_birth: "",
//     gender: "",
//     martial_status: "",
//     contact_number: "",
//     address: "",
//     employement_details: [],
//     references: [{ name: "", relation: "", contact_number: "", address: "" }],
//     loan_amount: "",
//   });

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
//   const [isEmploymentFieldVisible, setIsEmploymentFieldVisible] = useState(false); // State to toggle employment fields

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleEmploymentChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedEmploymentDetails = [...formData.employement_details];
//     updatedEmploymentDetails[index][name] = value;
//     setFormData({
//       ...formData,
//       employement_details: updatedEmploymentDetails,
//     });
//   };

//   const handleReferenceChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedReferences = [...formData.references];
//     updatedReferences[index][name] = value;
//     setFormData({
//       ...formData,
//       references: updatedReferences,
//     });
//   };

//   const addEmploymentDetail = () => {
//     setFormData({
//       ...formData,
//       employement_details: [
//         ...formData.employement_details,
//         { employer_name: "", job_title: "", employment_type: "" },
//       ],
//     });
//     setIsEmploymentFieldVisible(true);
//   };

//   const addReference = () => {
//     if (formData.references.length < 2) {
//       setFormData({
//         ...formData,
//         references: [
//           ...formData.references,
//           { name: "", relation: "", contact_number: "", address: "" },
//         ],
//       });
//     }
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

//       {/* Loan Application Form */}
//       <form onSubmit={handleSubmit} className="loan-application-form">
//         <h2>Loan Application Form</h2>

//         {/* Basic Information */}
//         <div>
//           <label>Loan Type:</label>
//           <select
//             name="loan_type"
//             value={formData.loan_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Personal Loan">Personal Loan</option>
//             <option value="Car Loan">Car Loan</option>
//             <option value="Home Loan">Home Loan</option>
//             <option value="Gold Loan">Gold Loan</option>
//           </select>
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
//           <label>Contact Number:</label>
//           <input
//             type="text"
//             name="contact_number"
//             value={formData.contact_number}
//             onChange={handleChange}
//             pattern="^\d{10}$"
//             maxLength="10"
//             placeholder="Enter 10-digit number"
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

//         {/* Employment Details */}
//         <div className="array-field">
//           <label>Employment Details:</label>
//           {!isEmploymentFieldVisible && (
//             <button type="button" onClick={addEmploymentDetail}>
//               Add Employment Detail
//             </button>
//           )}
//           {isEmploymentFieldVisible && (
//             <div>
//               {formData.employement_details.map((detail, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     name="employer_name"
//                     value={detail.employer_name}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Employer Name"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="job_title"
//                     value={detail.job_title}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Job Title"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="employment_type"
//                     value={detail.employment_type}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Employment Type"
//                     required
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* References */}
//         <div className="array-field">
//           <label>References:</label>
//           {formData.references.map((reference, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 name="name"
//                 value={reference.name}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 type="text"
//                 name="relation"
//                 value={reference.relation}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Relation"
//                 required
//               />
//               <input
//                 type="text"
//                 name="contact_number"
//                 value={reference.contact_number}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Contact Number"
//                 pattern="^\d{10}$"
//                 maxLength="10"
//                 required
//               />
//               <input
//                 type="text"
//                 name="address"
//                 value={reference.address}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Address"
//                 required
//               />
//             </div>
//           ))}
//         </div>

//         {/* Add References Button (Limited to 2 references) */}
//         {formData.references.length < 2 && (
//           <button type="button" onClick={addReference}>
//             Add Reference
//           </button>
//         )}

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



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./LoanApplicationForm.css"; // Import the CSS file

// const LoanApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     loan_type: "",
//     full_name: "",
//     date_of_birth: "",
//     gender: "",
//     martial_status: "",
//     contact_number: "",
//     address: "",
//     employement_details: [],
//     references: [{ name: "", relation: "", contact_number: "", address: "" }],
//     loan_amount: "",
//   });

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
//   const [isEmploymentFieldVisible, setIsEmploymentFieldVisible] = useState(false); // State to toggle employment fields

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleEmploymentChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedEmploymentDetails = [...formData.employement_details];
//     updatedEmploymentDetails[index][name] = value;
//     setFormData({
//       ...formData,
//       employement_details: updatedEmploymentDetails,
//     });
//   };

//   const handleReferenceChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedReferences = [...formData.references];
//     updatedReferences[index][name] = value;
//     setFormData({
//       ...formData,
//       references: updatedReferences,
//     });
//   };

//   const addEmploymentDetail = () => {
//     setFormData({
//       ...formData,
//       employement_details: [
//         ...formData.employement_details,
//         { employer_name: "", job_title: "", employment_type: "" },
//       ],
//     });
//     setIsEmploymentFieldVisible(true);
//   };

//   const addReference = () => {
//     if (formData.references.length < 2) {
//       setFormData({
//         ...formData,
//         references: [
//           ...formData.references,
//           { name: "", relation: "", contact_number: "", address: "" },
//         ],
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // You can add API call or further processing here
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleNext = () => {
//     navigate("/documents"); // Redirect to /documents page
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

//       {/* Loan Application Form */}
//       <form onSubmit={handleSubmit} className="loan-application-form">
//         <h2>Loan Application Form</h2>

//         {/* Basic Information */}
//         <div>
//           <label>Loan Type:</label>
//           <select
//             name="loan_type"
//             value={formData.loan_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="Personal Loan">Personal Loan</option>
//             <option value="Car Loan">Car Loan</option>
//             <option value="Home Loan">Home Loan</option>
//             <option value="Gold Loan">Gold Loan</option>
//           </select>
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
//           <label>Contact Number:</label>
//           <input
//             type="text"
//             name="contact_number"
//             value={formData.contact_number}
//             onChange={handleChange}
//             pattern="^\d{10}$"
//             maxLength="10"
//             placeholder="Enter 10-digit number"
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

//         {/* Employment Details */}
//         <div className="array-field">
//           <label>Employment Details:</label>
//           {!isEmploymentFieldVisible && (
//             <button type="button" onClick={addEmploymentDetail}>
//               Add Employment Detail
//             </button>
//           )}
//           {isEmploymentFieldVisible && (
//             <div>
//               {formData.employement_details.map((detail, index) => (
//                 <div key={index}>
//                   <input
//                     type="text"
//                     name="employer_name"
//                     value={detail.employer_name}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Employer Name"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="job_title"
//                     value={detail.job_title}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Job Title"
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="employment_type"
//                     value={detail.employment_type}
//                     onChange={(e) => handleEmploymentChange(e, index)}
//                     placeholder="Employment Type"
//                     required
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* References */}
//         <div className="array-field">
//           <label>References:</label>
//           {formData.references.map((reference, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 name="name"
//                 value={reference.name}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 type="text"
//                 name="relation"
//                 value={reference.relation}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Relation"
//                 required
//               />
//               <input
//                 type="text"
//                 name="contact_number"
//                 value={reference.contact_number}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Contact Number"
//                 pattern="^\d{10}$"
//                 maxLength="10"
//                 required
//               />
//               <input
//                 type="text"
//                 name="address"
//                 value={reference.address}
//                 onChange={(e) => handleReferenceChange(e, index)}
//                 placeholder="Address"
//                 required
//               />
//             </div>
//           ))}
//         </div>

//         {/* Add References Button (Limited to 2 references) */}
//         {formData.references.length < 2 && (
//           <button type="button" onClick={addReference}>
//             Add Reference
//           </button>
//         )}

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

//         {/* Next Button */}
//         <button type="button" onClick={handleNext}>
//           Next
//         </button>
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
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoanApplicationForm.css"; // Import the CSS file

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    loan_type: "",
    full_name: "",
    date_of_birth: "",
    gender: "",
    martial_status: "",
    contact_number: "",
    address: "",
    employement_details: [],
    references: [{ name: "", relation: "", contact_number: "", address: "" }],
    loan_amount: "",
  });

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
  const [isEmploymentFieldVisible, setIsEmploymentFieldVisible] = useState(false); // State to toggle employment fields

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmploymentChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEmploymentDetails = [...formData.employement_details];
    updatedEmploymentDetails[index][name] = value;
    setFormData({
      ...formData,
      employement_details: updatedEmploymentDetails,
    });
  };

  const handleReferenceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedReferences = [...formData.references];
    updatedReferences[index][name] = value;
    setFormData({
      ...formData,
      references: updatedReferences,
    });
  };

  const addEmploymentDetail = () => {
    setFormData({
      ...formData,
      employement_details: [
        ...formData.employement_details,
        { employer_name: "", job_title: "", employment_type: "" },
      ],
    });
    setIsEmploymentFieldVisible(true);
  };

  const addReference = () => {
    if (formData.references.length < 2) {
      setFormData({
        ...formData,
        references: [
          ...formData.references,
          { name: "", relation: "", contact_number: "", address: "" },
        ],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add API call or further processing here
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const handleNext = () => {
    navigate("/documents"); // Redirect to /documents page
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

      {/* Loan Application Form */}
      <form onSubmit={handleSubmit} className="loan-application-form">
        <h2>Loan Application Form</h2>

        {/* Basic Information */}
        <div>
          <label>Loan Type:</label>
          <select
            name="loan_type"
            value={formData.loan_type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Gold Loan">Gold Loan</option>
          </select>
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
          <label>Contact Number:</label>
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            pattern="^\d{10}$"
            maxLength="10"
            placeholder="Enter 10-digit number"
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

        {/* Employment Details */}
        <div className="array-field">
          <label>Employment Details:</label>
          {!isEmploymentFieldVisible && (
            <button type="button" onClick={addEmploymentDetail}>
              Add Employment Detail
            </button>
          )}
          {isEmploymentFieldVisible && (
            <div>
              {formData.employement_details.map((detail, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="employer_name"
                    value={detail.employer_name}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    placeholder="Employer Name"
                    required
                  />
                  <input
                    type="text"
                    name="job_title"
                    value={detail.job_title}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    placeholder="Job Title"
                    required
                  />
                  <input
                    type="text"
                    name="employment_type"
                    value={detail.employment_type}
                    onChange={(e) => handleEmploymentChange(e, index)}
                    placeholder="Employment Type"
                    required
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* References */}
        <div className="array-field">
          <label>References:</label>
          {formData.references.map((reference, index) => (
            <div key={index}>
              <input
                type="text"
                name="name"
                value={reference.name}
                onChange={(e) => handleReferenceChange(e, index)}
                placeholder="Name"
                required
              />
              <input
                type="text"
                name="relation"
                value={reference.relation}
                onChange={(e) => handleReferenceChange(e, index)}
                placeholder="Relation"
                required
              />
              <input
                type="text"
                name="contact_number"
                value={reference.contact_number}
                onChange={(e) => handleReferenceChange(e, index)}
                placeholder="Contact Number"
                pattern="^\d{10}$"
                maxLength="10"
                required
              />
              <input
                type="text"
                name="address"
                value={reference.address}
                onChange={(e) => handleReferenceChange(e, index)}
                placeholder="Address"
                required
              />
            </div>
          ))}
        </div>

        {/* Add References Button (Limited to 2 references) */}
        {formData.references.length < 2 && (
          <button type="button" onClick={addReference}>
            Add Reference
          </button>
        )}

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

        {/* Next Button */}
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoanApplicationForm;


