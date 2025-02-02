// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./Approve.css";

// const Approve = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const { applicationId } = useParams();

//   const [documents, setDocuments] = useState({
//     identityProof: '',
//     panCard: '',
//     incomeProof: '',
//     bankStatements: '',
//     picture: '',
//     loanSpecificDocs: '',
//     assetDocuments: ''
//   });

//   const handleBack = () => {
//     navigate("/applicant-details");
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleDocumentVerification = (documentType, value) => {
//     setDocuments(prev => ({
//       ...prev,
//       [documentType]: value
//     }));
//   };

//   const handleApprove = () => {
//     // Check if all documents are verified
//     const allDocumentsVerified = Object.values(documents).every(value => value !== '');
    
//     if (!allDocumentsVerified) {
//       alert("Please verify all documents before approving.");
//       return;
//     }
    
//     console.log("Documents verification status:", documents);
//     alert("Application approved!");
//     // Add your approval logic here
//   };

//   const handleReject = () => {
//     alert("Application rejected!");
//     // Add your rejection logic here
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
//         <h2>Document Verification</h2>
        
//         <div className="documents-verification-container">
//           <div className="document-row">
//             <div className="document-info">
//               <h3>Identity Proof</h3>
//               <p>Verify the authenticity of provided identity proof</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="identityProof"
//                   value="yes"
//                   checked={documents.identityProof === 'yes'}
//                   onChange={(e) => handleDocumentVerification('identityProof', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="identityProof"
//                   value="no"
//                   checked={documents.identityProof === 'no'}
//                   onChange={(e) => handleDocumentVerification('identityProof', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>PAN Card</h3>
//               <p>Verify the PAN card details</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="panCard"
//                   value="yes"
//                   checked={documents.panCard === 'yes'}
//                   onChange={(e) => handleDocumentVerification('panCard', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="panCard"
//                   value="no"
//                   checked={documents.panCard === 'no'}
//                   onChange={(e) => handleDocumentVerification('panCard', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Income Proof</h3>
//               <p>Verify income documents and statements</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="incomeProof"
//                   value="yes"
//                   checked={documents.incomeProof === 'yes'}
//                   onChange={(e) => handleDocumentVerification('incomeProof', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="incomeProof"
//                   value="no"
//                   checked={documents.incomeProof === 'no'}
//                   onChange={(e) => handleDocumentVerification('incomeProof', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Bank Statements</h3>
//               <p>Verify bank statement details</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="bankStatements"
//                   value="yes"
//                   checked={documents.bankStatements === 'yes'}
//                   onChange={(e) => handleDocumentVerification('bankStatements', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="bankStatements"
//                   value="no"
//                   checked={documents.bankStatements === 'no'}
//                   onChange={(e) => handleDocumentVerification('bankStatements', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Picture</h3>
//               <p>Verify applicant's photograph</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="picture"
//                   value="yes"
//                   checked={documents.picture === 'yes'}
//                   onChange={(e) => handleDocumentVerification('picture', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="picture"
//                   value="no"
//                   checked={documents.picture === 'no'}
//                   onChange={(e) => handleDocumentVerification('picture', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Loan-Specific Documents</h3>
//               <p>Verify loan-related documentation</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="loanSpecificDocs"
//                   value="yes"
//                   checked={documents.loanSpecificDocs === 'yes'}
//                   onChange={(e) => handleDocumentVerification('loanSpecificDocs', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="loanSpecificDocs"
//                   value="no"
//                   checked={documents.loanSpecificDocs === 'no'}
//                   onChange={(e) => handleDocumentVerification('loanSpecificDocs', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Asset Documents</h3>
//               <p>Verify asset-related documentation</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="assetDocuments"
//                   value="yes"
//                   checked={documents.assetDocuments === 'yes'}
//                   onChange={(e) => handleDocumentVerification('assetDocuments', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="assetDocuments"
//                   value="no"
//                   checked={documents.assetDocuments === 'no'}
//                   onChange={(e) => handleDocumentVerification('assetDocuments', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="action-buttons">
//           <button className="reject-button" onClick={handleReject}>
//             Reject
//           </button>
//           <button className="approve-button" onClick={handleApprove}>
//             Approve
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Approve;






// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./Approve.css";

// const Approve = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const { loanId } = useParams();

//   const [documents, setDocuments] = useState({
//     identityProof: '',
//     panCard: '',
//     incomeProof: '',
//     bankStatements: '',
//     picture: '',
//     loanSpecificDocs: '',
//     assetDocuments: ''
//   });

//   const [applicantDetails, setApplicantDetails] = useState(null);

//   useEffect(() => {
//     // Fetch applicant details when the component mounts or when applicationId changes
//     if (loanId) {
//       fetchApplicantDetails(loanId);
//     }
//   }, [loanId]);

//   const fetchApplicantDetails = async (id) => {
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch(`/api/applicants/${id}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch applicant details");
//       }
//       const data = await response.json();
//       setApplicantDetails(data);
//     } catch (error) {
//       console.error("Error fetching applicant details:", error);
//       alert("Failed to fetch applicant details");
//     }
//   };

//   const handleBack = () => {
//     navigate("/applicant-details");
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!"); // Replace with actual logout logic
//   };

//   const handleDocumentVerification = (documentType, value) => {
//     setDocuments(prev => ({
//       ...prev,
//       [documentType]: value
//     }));
//   };

//   const handleApprove = () => {
//     // Check if all documents are verified
//     const allDocumentsVerified = Object.values(documents).every(value => value !== '');
    
//     if (!allDocumentsVerified) {
//       alert("Please verify all documents before approving.");
//       return;
//     }
    
//     console.log("Documents verification status:", documents);
//     alert("Application approved!");
//     // Add your approval logic here
//   };

//   const handleReject = () => {
//     alert("Application rejected!");
//     // Add your rejection logic here
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
//         <h2>Document Verification</h2>
        
//         {applicantDetails && (
//           <div className="applicant-details">
//             <h3>Applicant Details</h3>
//             <p><strong>Name:</strong> {applicantDetails.name}</p>
//             <p><strong>Annual Salary:</strong> {applicantDetails.annualSalary}</p>
//             {/* Add more fields as needed */}
//           </div>
//         )}

//         <div className="documents-verification-container">
//           <div className="document-row">
//             <div className="document-info">
//               <h3>Identity Proof</h3>
//               <p>Verify the authenticity of provided identity proof</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="identityProof"
//                   value="yes"
//                   checked={documents.identityProof === 'yes'}
//                   onChange={(e) => handleDocumentVerification('identityProof', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="identityProof"
//                   value="no"
//                   checked={documents.identityProof === 'no'}
//                   onChange={(e) => handleDocumentVerification('identityProof', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>PAN Card</h3>
//               <p>Verify the PAN card details</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="panCard"
//                   value="yes"
//                   checked={documents.panCard === 'yes'}
//                   onChange={(e) => handleDocumentVerification('panCard', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="panCard"
//                   value="no"
//                   checked={documents.panCard === 'no'}
//                   onChange={(e) => handleDocumentVerification('panCard', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Income Proof</h3>
//               <p>Verify income documents and statements</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="incomeProof"
//                   value="yes"
//                   checked={documents.incomeProof === 'yes'}
//                   onChange={(e) => handleDocumentVerification('incomeProof', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="incomeProof"
//                   value="no"
//                   checked={documents.incomeProof === 'no'}
//                   onChange={(e) => handleDocumentVerification('incomeProof', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Bank Statements</h3>
//               <p>Verify bank statement details</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="bankStatements"
//                   value="yes"
//                   checked={documents.bankStatements === 'yes'}
//                   onChange={(e) => handleDocumentVerification('bankStatements', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="bankStatements"
//                   value="no"
//                   checked={documents.bankStatements === 'no'}
//                   onChange={(e) => handleDocumentVerification('bankStatements', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Picture</h3>
//               <p>Verify applicant's photograph</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="picture"
//                   value="yes"
//                   checked={documents.picture === 'yes'}
//                   onChange={(e) => handleDocumentVerification('picture', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="picture"
//                   value="no"
//                   checked={documents.picture === 'no'}
//                   onChange={(e) => handleDocumentVerification('picture', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Loan-Specific Documents</h3>
//               <p>Verify loan-related documentation</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="loanSpecificDocs"
//                   value="yes"
//                   checked={documents.loanSpecificDocs === 'yes'}
//                   onChange={(e) => handleDocumentVerification('loanSpecificDocs', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="loanSpecificDocs"
//                   value="no"
//                   checked={documents.loanSpecificDocs === 'no'}
//                   onChange={(e) => handleDocumentVerification('loanSpecificDocs', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="document-row">
//             <div className="document-info">
//               <h3>Asset Documents</h3>
//               <p>Verify asset-related documentation</p>
//             </div>
//             <div className="verification-options">
//               <label>
//                 <input
//                   type="radio"
//                   name="assetDocuments"
//                   value="yes"
//                   checked={documents.assetDocuments === 'yes'}
//                   onChange={(e) => handleDocumentVerification('assetDocuments', e.target.value)}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="assetDocuments"
//                   value="no"
//                   checked={documents.assetDocuments === 'no'}
//                   onChange={(e) => handleDocumentVerification('assetDocuments', e.target.value)}
//                 />
//                 No
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="action-buttons">
//           <button className="reject-button" onClick={handleReject}>
//             Reject
//           </button>
//           <button className="approve-button" onClick={handleApprove}>
//             Approve
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 Loan Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Approve;




import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Approve.css";

const Approve = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { loanId } = useParams();

  const [documents, setDocuments] = useState({
    identityProof: '',
    panCard: '',
    incomeProof: '',
    bankStatements: '',
    picture: '',
    loanSpecificDocs: '',
    assetDocuments: ''
  });

  const [applicantDetails, setApplicantDetails] = useState(null);

  useEffect(() => {
    // Fetch applicant details when the component mounts or when loanId changes
    if (loanId) {
      fetchApplicantDetails(loanId);
    }
  }, [loanId]);

  const fetchApplicantDetails = async (loanId) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`http://localhost:1093/application/${loanId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch applicant details");
      }
      const data = await response.json();
      setApplicantDetails(data);
    } catch (error) {
      console.error("Error fetching applicant details:", error);
      alert("Failed to fetch applicant details");
    }
  };

  const handleBack = () => {
    // Navigate back to the ApplicantDetails page with the specific loanId
    navigate(`/applicant-details/${loanId}`);
  };

  const handleLogout = () => {
    alert("Logged out successfully!"); // Replace with actual logout logic
  };

  const handleDocumentVerification = (documentType, value) => {
    setDocuments(prev => ({
      ...prev,
      [documentType]: value
    }));
  };

  const handleApprove = () => {
    // Check if all documents are verified
    const allDocumentsVerified = Object.values(documents).every(value => value !== '');
    
    if (!allDocumentsVerified) {
      alert("Please verify all documents before approving.");
      return;
    }
    
    console.log("Documents verification status:", documents);
    alert("Application approved!");
    // Add your approval logic here
  };

  const handleReject = () => {
    alert("Application rejected!");
    // Add your rejection logic here
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
        <h2>Document Verification</h2>
        
        {applicantDetails && (
          <div className="applicant-details">
            <h3>Applicant Details</h3>
            <p><strong>Name:</strong> {applicantDetails.name}</p>
            <p><strong>Annual Salary:</strong> {applicantDetails.annualSalary}</p>
            {/* Add more fields as needed */}
          </div>
        )}

        <div className="documents-verification-container">
          <div className="document-row">
            <div className="document-info">
              <h3>Identity Proof</h3>
              <p>Verify the authenticity of provided identity proof</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="identityProof"
                  value="yes"
                  checked={documents.identityProof === 'yes'}
                  onChange={(e) => handleDocumentVerification('identityProof', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="identityProof"
                  value="no"
                  checked={documents.identityProof === 'no'}
                  onChange={(e) => handleDocumentVerification('identityProof', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className="document-row">
            <div className="document-info">
              <h3>PAN Card</h3>
              <p>Verify the PAN card details</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="panCard"
                  value="yes"
                  checked={documents.panCard === 'yes'}
                  onChange={(e) => handleDocumentVerification('panCard', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="panCard"
                  value="no"
                  checked={documents.panCard === 'no'}
                  onChange={(e) => handleDocumentVerification('panCard', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className="document-row">
            <div className="document-info">
              <h3>Income Proof</h3>
              <p>Verify income documents and statements</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="incomeProof"
                  value="yes"
                  checked={documents.incomeProof === 'yes'}
                  onChange={(e) => handleDocumentVerification('incomeProof', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="incomeProof"
                  value="no"
                  checked={documents.incomeProof === 'no'}
                  onChange={(e) => handleDocumentVerification('incomeProof', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className="document-row">
            <div className="document-info">
              <h3>Bank Statements</h3>
              <p>Verify bank statement details</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="bankStatements"
                  value="yes"
                  checked={documents.bankStatements === 'yes'}
                  onChange={(e) => handleDocumentVerification('bankStatements', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="bankStatements"
                  value="no"
                  checked={documents.bankStatements === 'no'}
                  onChange={(e) => handleDocumentVerification('bankStatements', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className="document-row">
            <div className="document-info">
              <h3>Picture</h3>
              <p>Verify applicant's photograph</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="picture"
                  value="yes"
                  checked={documents.picture === 'yes'}
                  onChange={(e) => handleDocumentVerification('picture', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="picture"
                  value="no"
                  checked={documents.picture === 'no'}
                  onChange={(e) => handleDocumentVerification('picture', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className="document-row">
            <div className="document-info">
              <h3>Loan-Specific Documents</h3>
              <p>Verify loan-related documentation</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="loanSpecificDocs"
                  value="yes"
                  checked={documents.loanSpecificDocs === 'yes'}
                  onChange={(e) => handleDocumentVerification('loanSpecificDocs', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="loanSpecificDocs"
                  value="no"
                  checked={documents.loanSpecificDocs === 'no'}
                  onChange={(e) => handleDocumentVerification('loanSpecificDocs', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className="document-row">
            <div className="document-info">
              <h3>Asset Documents</h3>
              <p>Verify asset-related documentation</p>
            </div>
            <div className="verification-options">
              <label>
                <input
                  type="radio"
                  name="assetDocuments"
                  value="yes"
                  checked={documents.assetDocuments === 'yes'}
                  onChange={(e) => handleDocumentVerification('assetDocuments', e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="assetDocuments"
                  value="no"
                  checked={documents.assetDocuments === 'no'}
                  onChange={(e) => handleDocumentVerification('assetDocuments', e.target.value)}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="reject-button" onClick={handleReject}>
            Reject
          </button>
          <button className="approve-button" onClick={handleApprove}>
            Approve
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Approve;