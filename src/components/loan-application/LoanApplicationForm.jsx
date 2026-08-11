import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoanApplicationForm.css';
import { apiUrl } from '../../config/api';

const DRAFT_KEY = 'loanApplicationDraft';

const initialForm = {
  loanType: '',
  fullName: '',
  dateOfBirth: '',
  gender: '',
  maritalStatus: '',
  contact_number: '',
  address: '',
  employmentDetails: [{ employer_name: '', job_title: '', employment_type: '' }],
  references: [{ name: '', relation: '', contact_number: '', address: '' }],
  loanAmount: '',
  annualSalary: '',
};

const steps = ['Personal Details', 'Employment & References', 'Loan Details', 'Review'];

function LoanApplicationForm() {
  const [formData, setFormData] = useState(initialForm);
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      try {
        setFormData({ ...initialForm, ...JSON.parse(saved) });
      } catch {
        localStorage.removeItem(DRAFT_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError('');
  };

  const updateArrayField = (collection, index, event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [collection]: current[collection].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const addReference = () => {
    if (formData.references.length < 2) {
      setFormData((current) => ({
        ...current,
        references: [...current.references, { name: '', relation: '', contact_number: '', address: '' }],
      }));
    }
  };

  const addEmployment = () => {
    if (formData.employmentDetails.length < 2) {
      setFormData((current) => ({
        ...current,
        employmentDetails: [...current.employmentDetails, { employer_name: '', job_title: '', employment_type: '' }],
      }));
    }
  };

  const removeArrayItem = (collection, index) => {
    setFormData((current) => ({
      ...current,
      [collection]: current[collection].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const validationError = useMemo(() => {
    if (step === 0) {
      if (!formData.loanType || !formData.fullName || !formData.dateOfBirth || !formData.gender || !formData.maritalStatus || !formData.contact_number || !formData.address) {
        return 'Please complete all personal details.';
      }
      if (!/^\d{10}$/.test(formData.contact_number)) return 'Contact number must contain exactly 10 digits.';
    }

    if (step === 1) {
      const employmentValid = formData.employmentDetails.every((item) => item.employer_name && item.job_title && item.employment_type);
      const referencesValid = formData.references.every((item) => item.name && item.relation && /^\d{10}$/.test(item.contact_number) && item.address);
      if (!employmentValid || !referencesValid) return 'Please complete employment and reference details.';
    }

    if (step === 2) {
      if (!Number(formData.loanAmount) || Number(formData.loanAmount) <= 0) return 'Enter a valid loan amount.';
      if (!Number(formData.annualSalary) || Number(formData.annualSalary) <= 0) return 'Enter a valid annual salary.';
    }

    return '';
  }, [formData, step]);

  const goNext = () => {
    setError(validationError);
    if (!validationError) setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setError('');
    setStep((current) => Math.max(current - 1, 0));
  };

  const clearDraft = () => {
    localStorage.removeItem(DRAFT_KEY);
    setFormData(initialForm);
    setStep(0);
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step !== 3) return goNext();

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (!token || !username) {
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const payload = {
      loanType: formData.loanType,
      fullName: formData.fullName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      maritalStatus: formData.maritalStatus,
      contactInfo: formData.contact_number,
      address: formData.address,
      annualSalary: Number(formData.annualSalary),
      loanAmount: Number(formData.loanAmount),
      employmentDetails: formData.employmentDetails.map((item) => `${item.employer_name}: ${item.job_title} (${item.employment_type})`),
      references: formData.references.map((item) => `${item.name}: ${item.relation} - ${item.contact_number}`),
    };

    try {
      const response = await fetch(apiUrl('/application'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-Username': username,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Failed to submit the loan application.');
      }

      localStorage.removeItem(DRAFT_KEY);
      navigate('/documents', { state: { applicationSubmitted: true } });
    } catch (err) {
      setError(err.message || 'Unable to submit the application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <section className="form-step">
          <h3>Personal Details</h3>
          <div className="form-grid">
            <label>Loan Type
              <select name="loanType" value={formData.loanType} onChange={updateField}>
                <option value="">Select</option>
                <option>Personal Loan</option><option>Car Loan</option><option>Home Loan</option><option>Gold Loan</option>
              </select>
            </label>
            <label>Full Name<input name="fullName" value={formData.fullName} onChange={updateField} /></label>
            <label>Date of Birth<input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={updateField} /></label>
            <label>Gender
              <select name="gender" value={formData.gender} onChange={updateField}>
                <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
              </select>
            </label>
            <label>Marital Status
              <select name="maritalStatus" value={formData.maritalStatus} onChange={updateField}>
                <option value="">Select</option><option>Single</option><option>Married</option><option>Other</option>
              </select>
            </label>
            <label>Contact Number<input name="contact_number" inputMode="numeric" maxLength="10" value={formData.contact_number} onChange={updateField} placeholder="10-digit number" /></label>
          </div>
          <label>Address<textarea name="address" value={formData.address} onChange={updateField} rows="3" /></label>
        </section>
      );
    }

    if (step === 1) {
      return (
        <section className="form-step">
          <div className="section-heading"><h3>Employment Details</h3><button type="button" onClick={addEmployment} disabled={formData.employmentDetails.length >= 2}>+ Add</button></div>
          {formData.employmentDetails.map((item, index) => (
            <div className="repeatable-card" key={index}>
              <div className="form-grid">
                <label>Employer<input name="employer_name" value={item.employer_name} onChange={(e) => updateArrayField('employmentDetails', index, e)} /></label>
                <label>Job Title<input name="job_title" value={item.job_title} onChange={(e) => updateArrayField('employmentDetails', index, e)} /></label>
                <label>Employment Type
                  <select name="employment_type" value={item.employment_type} onChange={(e) => updateArrayField('employmentDetails', index, e)}>
                    <option value="">Select</option><option>Full Time</option><option>Part Time</option><option>Self Employed</option>
                  </select>
                </label>
              </div>
              {formData.employmentDetails.length > 1 && <button type="button" onClick={() => removeArrayItem('employmentDetails', index)}>Remove</button>}
            </div>
          ))}

          <div className="section-heading"><h3>References</h3><button type="button" onClick={addReference} disabled={formData.references.length >= 2}>+ Add</button></div>
          {formData.references.map((item, index) => (
            <div className="repeatable-card" key={index}>
              <div className="form-grid">
                <label>Name<input name="name" value={item.name} onChange={(e) => updateArrayField('references', index, e)} /></label>
                <label>Relation<input name="relation" value={item.relation} onChange={(e) => updateArrayField('references', index, e)} /></label>
                <label>Contact<input name="contact_number" maxLength="10" value={item.contact_number} onChange={(e) => updateArrayField('references', index, e)} /></label>
              </div>
              <label>Address<input name="address" value={item.address} onChange={(e) => updateArrayField('references', index, e)} /></label>
              {formData.references.length > 1 && <button type="button" onClick={() => removeArrayItem('references', index)}>Remove</button>}
            </div>
          ))}
        </section>
      );
    }

    if (step === 2) {
      return (
        <section className="form-step">
          <h3>Loan & Financial Details</h3>
          <div className="form-grid">
            <label>Loan Amount (₹)<input type="number" min="1" name="loanAmount" value={formData.loanAmount} onChange={updateField} /></label>
            <label>Annual Salary (₹)<input type="number" min="1" name="annualSalary" value={formData.annualSalary} onChange={updateField} /></label>
          </div>
          <div className="info-card">
            <strong>Smart validation</strong>
            <p>The form validates required fields before submission and saves an unfinished application as a local draft so accidental refreshes do not lose progress.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="form-step">
        <h3>Review Application</h3>
        <div className="review-grid">
          <div><strong>Loan Type</strong><span>{formData.loanType}</span></div>
          <div><strong>Applicant</strong><span>{formData.fullName}</span></div>
          <div><strong>Contact</strong><span>{formData.contact_number}</span></div>
          <div><strong>Loan Amount</strong><span>₹{Number(formData.loanAmount).toLocaleString('en-IN')}</span></div>
          <div><strong>Annual Salary</strong><span>₹{Number(formData.annualSalary).toLocaleString('en-IN')}</span></div>
          <div><strong>References</strong><span>{formData.references.length}</span></div>
        </div>
        <div className="info-card"><strong>Ready to submit?</strong><p>Your application will be sent to the backend and the initial status will be tracked as Pending.</p></div>
      </section>
    );
  };

  return (
    <div className="loan-application-container">
      <div className="header">
        <button className="back-button" type="button" onClick={() => navigate('/user-dashboard')}>← Back</button>
        <button type="button" onClick={clearDraft}>Clear Draft</button>
      </div>

      <main className="loan-application-form">
        <div className="application-header">
          <div><p className="eyebrow">Digital Loan Application</p><h2>Apply for a Loan</h2><p>Complete the application in four simple steps.</p></div>
          <span>{step + 1} / {steps.length}</span>
        </div>

        <div className="progress-steps" aria-label="Application progress">
          {steps.map((label, index) => <div key={label} className={index <= step ? 'progress-step active' : 'progress-step'}><span>{index + 1}</span><small>{label}</small></div>)}
        </div>

        {error && <div className="form-error" role="alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="form-actions">
            <button type="button" onClick={goBack} disabled={step === 0}>Back</button>
            {step < steps.length - 1 ? (
              <button type="button" className="submit-button" onClick={goNext}>Continue</button>
            ) : (
              <button type="submit" className="submit-button" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Application'}</button>
            )}
          </div>
        </form>
      </main>
      <footer className="footer"><p>&copy; 2026 Loan Management System</p></footer>
    </div>
  );
}

export default LoanApplicationForm;
