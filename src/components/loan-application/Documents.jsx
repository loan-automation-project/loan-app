

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
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
//   const navigate = useNavigate(); // Initialize useNavigate

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

//   const handleBack = () => {
//     navigate("/user-dashboard"); // Redirect to user-dashboard
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





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
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
//   const navigate = useNavigate(); // Initialize useNavigate

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Documents Submitted:", formData);

//     const formDataToSend = new FormData();
//     formDataToSend.append("identity_proof_type", formData.identity_proof_type);
//     formDataToSend.append("identity_proof_file", formData.identity_proof_file);
//     formDataToSend.append("pan_card_file", formData.pan_card_file);
//     formDataToSend.append("income_proof_file", formData.income_proof_file);
//     formDataToSend.append("bank_statements_file", formData.bank_statements_file);
//     formDataToSend.append("is_employee", formData.is_employee);
//     formDataToSend.append("employment_proof_file", formData.employment_proof_file);
//     formDataToSend.append("picture_file", formData.picture_file);
//     formDataToSend.append("loan_specific_documents_file", formData.loan_specific_documents_file);
//     formDataToSend.append("asset_type", formData.asset_type);
//     formDataToSend.append("asset_document_file", formData.asset_document_file);

//     try {
//       const response = await fetch("http://localhost:1095/documents/upload", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         throw new Error("File upload failed");
//       }

//       const result = await response.json();
//       console.log("File upload response:", result);
//       alert("Documents submitted successfully!");
//     } catch (error) {
//       console.error("Error uploading documents:", error);
//       alert("Error uploading documents");
//     }
//   };

//   const handleBack = () => {
//     navigate("/user-dashboard"); // Redirect to user-dashboard
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






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoanApplicationForm.css";

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: "",
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleUpload = async (fileName) => {
//     const formDataToSend = new FormData();
//     formDataToSend.append(fileName, formData[fileName]);
//     try {
//       const response = await fetch("http://localhost:1095/documents/upload", {
//         method: "POST",
//         body: formDataToSend,
//       });
//       if (!response.ok) {
//         throw new Error("File upload failed");
//       }
//       alert("File uploaded successfully!");
//     } catch (error) {
//       alert("Error uploading file");
//     }
//   };

//   return (
//     <div className="loan-application-container">
//       <div className="header">
//         <button className="back-button" onClick={() => navigate("/user-dashboard")}>
//           &larr; Back
//         </button>
//       </div>

//       <form className="loan-application-form">
//         <h2>Documents</h2>

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
//           <input type="file" name="identity_proof_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("identity_proof_file")}>Upload</button>
//         </div>

//         <div>
//           <label>PAN Card:</label>
//           <input type="file" name="pan_card_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("pan_card_file")}>Upload</button>
//         </div>

//         <div>
//           <label>Income Proof:</label>
//           <input type="file" name="income_proof_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("income_proof_file")}>Upload</button>
//         </div>

//         <div>
//           <label>Bank Statements:</label>
//           <input type="file" name="bank_statements_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("bank_statements_file")}>Upload</button>
//         </div>

//         <div>
//           <label>Are you an employee?</label>
//           <select name="is_employee" value={formData.is_employee} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {formData.is_employee === "yes" && (
//             <div>
//               <label>Employment Proof:</label>
//               <input type="file" name="employment_proof_file" onChange={handleChange} required />
//               <button type="button" onClick={() => handleUpload("employment_proof_file")}>Upload</button>
//             </div>
//           )}
//         </div>

//         <div>
//           <label>Picture:</label>
//           <input type="file" name="picture_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("picture_file")}>Upload</button>
//         </div>

//         <div>
//           <label>Loan-Specific Documents:</label>
//           <input type="file" name="loan_specific_documents_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("loan_specific_documents_file")}>Upload</button>
//         </div>

//         <div>
//           <label>Asset Type:</label>
//           <input type="text" name="asset_type" value={formData.asset_type} onChange={handleChange} required />
//           <label>Asset Document:</label>
//           <input type="file" name="asset_document_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("asset_document_file")}>Upload</button>
//         </div>
//       </form>

//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoanApplicationForm.css";

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: "",
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleUpload = async (fileName) => {
//     const formDataToSend = new FormData();
//     formDataToSend.append(fileName, formData[fileName]);
//     try {
//       const response = await fetch("http://localhost:1095/documents/upload", {
//         method: "POST",
//         body: formDataToSend,
//       });
//       if (!response.ok) {
//         throw new Error("File upload failed");
//       }
//       alert("File uploaded successfully!");
//     } catch (error) {
//       alert("Error uploading file");
//     }
//   };

//   return (
//     <div className="loan-application-container">
//       <div className="header">
//         <button className="back-button" onClick={() => navigate("/user-dashboard")}>
//           &larr; Back
//         </button>
//       </div>

//       <form className="loan-application-form">
//         <h2>Documents</h2>

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
//           <div className="file-upload-container">
//             <input type="file" name="identity_proof_file" onChange={handleChange} required />
//             <button type="button" onClick={() => handleUpload("identity_proof_file")}>Upload</button>
//           </div>
//         </div>

//         <div className="file-upload-container">
//           <label>PAN Card:</label>
//           <input type="file" name="pan_card_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("pan_card_file")}>Upload</button>
//         </div>

//         <div className="file-upload-container">
//           <label>Income Proof:</label>
//           <input type="file" name="income_proof_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("income_proof_file")}>Upload</button>
//         </div>

//         <div className="file-upload-container">
//           <label>Bank Statements:</label>
//           <input type="file" name="bank_statements_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("bank_statements_file")}>Upload</button>
//         </div>

//         <div>
//           <label>Are you an employee?</label>
//           <select name="is_employee" value={formData.is_employee} onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {formData.is_employee === "yes" && (
//             <div className="file-upload-container">
//               <label>Employment Proof:</label>
//               <input type="file" name="employment_proof_file" onChange={handleChange} required />
//               <button type="button" onClick={() => handleUpload("employment_proof_file")}>Upload</button>
//             </div>
//           )}
//         </div>

//         <div className="file-upload-container">
//           <label>Picture:</label>
//           <input type="file" name="picture_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("picture_file")}>Upload</button>
//         </div>

//         <div className="file-upload-container">
//           <label>Loan-Specific Documents:</label>
//           <input type="file" name="loan_specific_documents_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("loan_specific_documents_file")}>Upload</button>
//         </div>

//         <div className="file-upload-container">
//           <label>Asset Type:</label>
//           <input type="text" name="asset_type" value={formData.asset_type} onChange={handleChange} required />
//           <label>Asset Document:</label>
//           <input type="file" name="asset_document_file" onChange={handleChange} required />
//           <button type="button" onClick={() => handleUpload("asset_document_file")}>Upload</button>
//         </div>
//       </form>

//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoanApplicationForm.css";

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: "",
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleUpload = async (fileName) => {
//     const formDataToSend = new FormData();
//     formDataToSend.append(fileName, formData[fileName]);
//     try {
//       const response = await fetch("http://localhost:1095/documents/upload", {
//         method: "POST",
//         body: formDataToSend,
//       });
//       if (!response.ok) {
//         throw new Error("File upload failed");
//       }
//       alert("File uploaded successfully!");
//     } catch (error) {
//       alert("Error uploading file");
//     }
//   };

//   return (
//     <div className="loan-application-container">
//       <div className="header">
//         <button className="back-button" onClick={() => navigate("/user-dashboard")}>
//           &larr; Back
//         </button>
//       </div>

//       <form className="loan-application-form">
//         <h2>Documents</h2>

//         <div className="mb-4">
//           <label>Identity Proof:</label>
//           <select
//             name="identity_proof_type"
//             value={formData.identity_proof_type}
//             onChange={handleChange}
//             required
//             className="w-full p-2 mb-2 border rounded"
//           >
//             <option value="">Select</option>
//             <option value="Aadhar">Aadhar</option>
//             <option value="Passport">Passport</option>
//           </select>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="identity_proof_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("identity_proof_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>PAN Card:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="pan_card_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("pan_card_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Income Proof:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="income_proof_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("income_proof_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Bank Statements:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="bank_statements_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("bank_statements_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Are you an employee?</label>
//           <select 
//             name="is_employee" 
//             value={formData.is_employee} 
//             onChange={handleChange} 
//             required
//             className="w-full p-2 mb-2 border rounded"
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {formData.is_employee === "yes" && (
//             <div className="flex gap-2 items-center">
//               <input 
//                 type="file" 
//                 name="employment_proof_file" 
//                 onChange={handleChange} 
//                 required 
//                 className="flex-1"
//               />
//               <button 
//                 type="button" 
//                 onClick={() => handleUpload("employment_proof_file")}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Upload
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="mb-4">
//           <label>Picture:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="picture_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("picture_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Loan-Specific Documents:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="loan_specific_documents_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("loan_specific_documents_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Asset Type:</label>
//           <input 
//             type="text" 
//             name="asset_type" 
//             value={formData.asset_type} 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 mb-2 border rounded"
//           />
//           <label>Asset Document:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="asset_document_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("asset_document_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>
//       </form>

//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoanApplicationForm.css";

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: "",
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleUpload = async (fileName) => {
//     const formDataToSend = new FormData();
//     formDataToSend.append(fileName, formData[fileName]);
//     try {
//       const response = await fetch("http://localhost:1095/documents/upload", {
//         method: "POST",
//         body: formDataToSend,
//       });
//       if (!response.ok) {
//         throw new Error("File upload failed");
//       }
//       alert("File uploaded successfully!");
//     } catch (error) {
//       alert("Error uploading file");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="loan-application-container">
//       <div className="header">
//         <button className="back-button" onClick={() => navigate("/user-dashboard")}>
//           &larr; Back
//         </button>
//       </div>

//       <form className="loan-application-form" onSubmit={handleSubmit}>
//         <h2>Documents</h2>

//         {/* ... (all existing form fields remain the same) ... */}
//         <div className="mb-4">
//           <label>Identity Proof:</label>
//           <select
//             name="identity_proof_type"
//             value={formData.identity_proof_type}
//             onChange={handleChange}
//             required
//             className="w-full p-2 mb-2 border rounded"
//           >
//             <option value="">Select</option>
//             <option value="Aadhar">Aadhar</option>
//             <option value="Passport">Passport</option>
//           </select>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="identity_proof_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("identity_proof_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>PAN Card:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="pan_card_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("pan_card_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Income Proof:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="income_proof_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("income_proof_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Bank Statements:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="bank_statements_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("bank_statements_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Are you an employee?</label>
//           <select 
//             name="is_employee" 
//             value={formData.is_employee} 
//             onChange={handleChange} 
//             required
//             className="w-full p-2 mb-2 border rounded"
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {formData.is_employee === "yes" && (
//             <div className="flex gap-2 items-center">
//               <input 
//                 type="file" 
//                 name="employment_proof_file" 
//                 onChange={handleChange} 
//                 required 
//                 className="flex-1"
//               />
//               <button 
//                 type="button" 
//                 onClick={() => handleUpload("employment_proof_file")}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Upload
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="mb-4">
//           <label>Picture:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="picture_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("picture_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Loan-Specific Documents:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="loan_specific_documents_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("loan_specific_documents_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label>Asset Type:</label>
//           <input 
//             type="text" 
//             name="asset_type" 
//             value={formData.asset_type} 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 mb-2 border rounded"
//           />
//           <label>Asset Document:</label>
//           <div className="flex gap-2 items-center">
//             <input 
//               type="file" 
//               name="asset_document_file" 
//               onChange={handleChange} 
//               required 
//               className="flex-1"
//             />
//             <button 
//               type="button" 
//               onClick={() => handleUpload("asset_document_file")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         {/* Add Submit Button */}
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>

//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;   













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoanApplicationForm.css";

// const Documents = () => {
//   const [formData, setFormData] = useState({
//     identity_proof_type: "",
//     identity_proof_file: null,
//     pan_card_file: null,
//     income_proof_file: null,
//     bank_statements_file: null,
//     is_employee: "",
//     employment_proof_file: null,
//     picture_file: null,
//     loan_specific_documents_file: null,
//     asset_type: "",
//     asset_document_file: null,
//   });

//   const navigate = useNavigate();
  
//   // Add state for tracking upload status
//   const [uploadStatus, setUploadStatus] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleUpload = async (fileName) => {
//     const file = formData[fileName];
//     if (!file) {
//       alert("Please select a file first");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("file", file);
//     formDataToSend.append("name", file.name);
//     formDataToSend.append("type", fileName); // Using the field name as document type
//     formDataToSend.append("loanId", "1"); // You'll need to replace this with actual loan ID

//     setUploadStatus(prev => ({ ...prev, [fileName]: 'uploading' }));

//     try {
//       const response = await fetch("http://localhost:1095/documents/upload", {
//         method: "POST",
//         body: formDataToSend,
//       });
      
//       if (!response.ok) {
//         throw new Error("File upload failed");
//       }
      
//       setUploadStatus(prev => ({ ...prev, [fileName]: 'success' }));
//       alert(`${fileName} uploaded successfully!`);
//     } catch (error) {
//       setUploadStatus(prev => ({ ...prev, [fileName]: 'error' }));
//       alert(`Error uploading ${fileName}: ${error.message}`);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Check if all required files have been uploaded
//     const requiredFiles = [
//       'identity_proof_file',
//       'pan_card_file',
//       'income_proof_file',
//       'bank_statements_file',
//       'picture_file',
//       'asset_document_file'
//     ];

//     const missingFiles = requiredFiles.filter(
//       file => !uploadStatus[file] || uploadStatus[file] !== 'success'
//     );

//     if (missingFiles.length > 0) {
//       alert(`Please upload all required documents: ${missingFiles.join(', ')}`);
//       return;
//     }

//     // Proceed with form submission
//     console.log("All documents uploaded, proceeding with submission");
//     // Add your final form submission logic here
//   };

//   const getUploadButtonStyle = (fileName) => {
//     const status = uploadStatus[fileName];
//     if (status === 'success') {
//       return "bg-green-500 hover:bg-green-600";
//     } else if (status === 'error') {
//       return "bg-red-500 hover:bg-red-600";
//     } else if (status === 'uploading') {
//       return "bg-yellow-500 hover:bg-yellow-600";
//     }
//     return "bg-blue-500 hover:bg-blue-600";
//   };

//   const renderFileInput = (fileName, label, required = true) => (
//     <div className="mb-4">
//       <label>{label}:</label>
//       <div className="flex gap-2 items-center">
//         <input 
//           type="file" 
//           name={fileName} 
//           onChange={handleChange} 
//           required={required}
//           className="flex-1"
//         />
//         <button 
//           type="button" 
//           onClick={() => handleUpload(fileName)}
//           className={`text-white px-4 py-2 rounded ${getUploadButtonStyle(fileName)}`}
//           disabled={uploadStatus[fileName] === 'uploading'}
//         >
//           {uploadStatus[fileName] === 'success' ? '✓ Uploaded' : 
//            uploadStatus[fileName] === 'uploading' ? 'Uploading...' : 'Upload'}
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="loan-application-container">
//       <div className="header">
//         <button className="back-button" onClick={() => navigate("/user-dashboard")}>
//           &larr; Back
//         </button>
//       </div>

//       <form className="loan-application-form" onSubmit={handleSubmit}>
//         <h2>Documents</h2>

//         <div className="mb-4">
//           <label>Identity Proof:</label>
//           <select
//             name="identity_proof_type"
//             value={formData.identity_proof_type}
//             onChange={handleChange}
//             required
//             className="w-full p-2 mb-2 border rounded"
//           >
//             <option value="">Select</option>
//             <option value="Aadhar">Aadhar</option>
//             <option value="Passport">Passport</option>
//           </select>
//           {renderFileInput("identity_proof_file", "Identity Proof Document")}
//         </div>

//         {renderFileInput("pan_card_file", "PAN Card")}
//         {renderFileInput("income_proof_file", "Income Proof")}
//         {renderFileInput("bank_statements_file", "Bank Statements")}
        
//         <div className="mb-4">
//           <label>Are you an employee?</label>
//           <select 
//             name="is_employee" 
//             value={formData.is_employee} 
//             onChange={handleChange} 
//             required
//             className="w-full p-2 mb-2 border rounded"
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {formData.is_employee === "yes" && 
//             renderFileInput("employment_proof_file", "Employment Proof")}
//         </div>

//         {renderFileInput("picture_file", "Picture")}
//         {renderFileInput("loan_specific_documents_file", "Loan-Specific Documents")}

//         <div className="mb-4">
//           <label>Asset Type:</label>
//           <input 
//             type="text" 
//             name="asset_type" 
//             value={formData.asset_type} 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 mb-2 border rounded"
//           />
//           {renderFileInput("asset_document_file", "Asset Document")}
//         </div>

//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>

//       <footer className="footer">
//         <p>&copy; 2023 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documents;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoanApplicationForm.css";

const Documents = () => {
  const [formData, setFormData] = useState({
    identity_proof_type: "",
    identity_proof_file: null,
    pan_card_file: null,
    income_proof_file: null,
    bank_statements_file: null,
    is_employee: "",
    employment_proof_file: null,
    picture_file: null,
    loan_specific_documents_file: null,
    asset_type: "",
    asset_document_file: null,
  });

  const navigate = useNavigate();
  const [uploadStatus, setUploadStatus] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleUpload = async (fileName) => {
    const file = formData[fileName];
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append("name", file.name);
    formDataToSend.append("type", fileName);
    formDataToSend.append("loanId", "1");

    setUploadStatus(prev => ({ ...prev, [fileName]: 'uploading' }));

    try {
      const response = await fetch("http://localhost:1095/documents/upload", {
        method: "POST",
        body: formDataToSend,
      });
      
      if (!response.ok) {
        throw new Error("File upload failed");
      }
      
      setUploadStatus(prev => ({ ...prev, [fileName]: 'success' }));
      alert(`${fileName} uploaded successfully!`);
    } catch (error) {
      setUploadStatus(prev => ({ ...prev, [fileName]: 'error' }));
      alert(`Error uploading ${fileName}: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const requiredFiles = [
      'identity_proof_file',
      'pan_card_file',
      'income_proof_file',
      'bank_statements_file',
      'picture_file',
      'asset_document_file'
    ];

    const missingFiles = requiredFiles.filter(
      file => !uploadStatus[file] || uploadStatus[file] !== 'success'
    );

    if (missingFiles.length > 0) {
      alert(`Please upload all required documents: ${missingFiles.join(', ')}`);
      return;
    }

    console.log("All documents uploaded, proceeding with submission");
  };

  const getUploadButtonStyle = (fileName) => {
    const status = uploadStatus[fileName];
    const baseStyle = "text-white";
    
    if (status === 'success') {
      return `${baseStyle} bg-green-500 hover:bg-green-600`;
    } else if (status === 'error') {
      return `${baseStyle} bg-red-500 hover:bg-red-600`;
    } else if (status === 'uploading') {
      return `${baseStyle} bg-yellow-500`;
    }
    return `${baseStyle} bg-blue-500 hover:bg-blue-600`;
  };

  const renderFileInput = (fileName, label, required = true) => (
    <div className="form-field">
      <label>{label}:</label>
      <div className="file-input-container">
        <input 
          type="file" 
          name={fileName} 
          onChange={handleChange} 
          required={required}
        />
        <button 
          type="button" 
          onClick={() => handleUpload(fileName)}
          className={getUploadButtonStyle(fileName)}
          disabled={uploadStatus[fileName] === 'uploading'}
        >
          {uploadStatus[fileName] === 'success' ? '✓ Uploaded' : 
           uploadStatus[fileName] === 'uploading' ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="loan-application-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate("/user-dashboard")}>
          &larr; Back
        </button>
      </div>

      <form className="loan-application-form" onSubmit={handleSubmit}>
        <h2>Documents</h2>

        <div className="form-field">
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
          {renderFileInput("identity_proof_file", "Identity Proof Document")}
        </div>

        {renderFileInput("pan_card_file", "PAN Card")}
        {renderFileInput("income_proof_file", "Income Proof")}
        {renderFileInput("bank_statements_file", "Bank Statements")}
        
        <div className="form-field">
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
          {formData.is_employee === "yes" && 
            renderFileInput("employment_proof_file", "Employment Proof")}
        </div>

        {renderFileInput("picture_file", "Picture")}
        {renderFileInput("loan_specific_documents_file", "Loan-Specific Documents")}

        <div className="form-field">
          <label>Asset Type:</label>
          <input 
            type="text" 
            name="asset_type" 
            value={formData.asset_type} 
            onChange={handleChange} 
            required 
          />
          {renderFileInput("asset_document_file", "Asset Document")}
        </div>

        <button type="submit" className="submit-buttonn">
          Submit
        </button>
      </form>

      <footer className="footer">
        <p>&copy; 2023 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Documents;