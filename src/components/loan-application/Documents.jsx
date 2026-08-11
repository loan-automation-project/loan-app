import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LoanApplicationForm.css';

const documentTypes = [
  ['identity', 'Identity Proof', 'PDF, JPG or PNG'],
  ['pan', 'PAN Card', 'PDF, JPG or PNG'],
  ['income', 'Income Proof', 'PDF, JPG or PNG'],
  ['bank', 'Bank Statement', 'PDF, JPG or PNG'],
];

function Documents() {
  const [files, setFiles] = useState({});
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const application = JSON.parse(localStorage.getItem('lastSubmittedApplication') || 'null');

  const completion = useMemo(() => documentTypes.filter(([key]) => files[key]).length, [files]);

  const handleFileChange = (key, event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowed.includes(file.type)) {
      setError('Only PDF, JPG and PNG files are supported.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Each document must be smaller than 5 MB.');
      return;
    }
    setError('');
    setFiles((current) => ({ ...current, [key]: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (completion !== documentTypes.length) {
      setError('Please provide all required documents before continuing.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="loan-application-container">
      <div className="header"><button className="back-button" onClick={() => navigate('/user-dashboard')}>← Back</button></div>
      <main className="loan-application-form">
        <p className="eyebrow">Document Verification</p>
        <h2>Upload Documents</h2>
        {location.state?.applicationSubmitted && <div className="info-card"><strong>Application submitted successfully.</strong><p>Application #{application?.loanId || 'saved'} is now awaiting review.</p></div>}
        {error && <div className="form-error" role="alert">{error}</div>}
        {submitted ? (
          <section className="form-step">
            <div className="info-card"><strong>Documents ready for verification</strong><p>All required files passed the client-side format and size checks. The next step is backend document upload and verification.</p></div>
            <div className="form-actions"><button type="button" className="submit-button" onClick={() => navigate('/user-dashboard')}>Go to Dashboard</button></div>
          </section>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-step">
              <p>{completion} of {documentTypes.length} documents completed</p>
              {documentTypes.map(([key, label, hint]) => (
                <div className="repeatable-card" key={key}>
                  <label>{label}<small>{hint} • Max 5 MB</small><input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(key, e)} required /></label>
                  {files[key] && <p>Selected: {files[key].name}</p>}
                </div>
              ))}
            </div>
            <div className="form-actions"><button type="button" onClick={() => navigate('/loan-application')}>Back to Application</button><button className="submit-button" type="submit">Validate Documents</button></div>
          </form>
        )}
      </main>
      <footer className="footer"><p>&copy; 2026 Loan Management System</p></footer>
    </div>
  );
}

export default Documents;
