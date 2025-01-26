import React, { useState } from "react";
import "./Faqs.css"; // Import the CSS file for styling

const Faqs = () => {
  // State to track which question is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data
  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "You can create an account by clicking on the 'Sign Up' button on the homepage. Fill in your details, verify your email, and you're all set!",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we use advanced encryption and security measures to protect your personal and financial information.",
        },
      ],
    },
    {
      title: "Loan Application",
      questions: [
        {
          question: "How do I apply for a loan?",
          answer:
            "Log in to your account, navigate to the 'Apply for Loan' section, fill in the required details, and submit your application. You will receive a confirmation once your application is processed.",
        },
        {
          question: "What documents are required for a loan application?",
          answer:
            "You will need valid identification (e.g., Aadhar card, PAN card), proof of income (e.g., salary slips, bank statements), and address proof (e.g., utility bills).",
        },
        {
          question: "How long does it take to approve a loan?",
          answer:
            "Loan approval typically takes 1-3 business days, depending on the completeness of your application and verification process.",
        },
      ],
    },
    {
      title: "Eligibility Criteria",
      questions: [
        {
          question: "What are the eligibility criteria for a loan?",
          answer:
            "To be eligible, you must be between 21 and 60 years old, have a minimum monthly income of ₹25,000, and a credit score of 650 or higher. Check the 'Eligibility Criteria' page for more details.",
        },
        {
          question: "Can I apply for a loan if I am self-employed?",
          answer:
            "Yes, self-employed individuals can apply for a loan if they have been in business for at least 2 years and meet the income requirements.",
        },
        {
          question: "Does my credit score affect my loan application?",
          answer:
            "Yes, a higher credit score increases your chances of loan approval and may also help you secure a lower interest rate.",
        },
      ],
    },
    {
      title: "EMI Calculation",
      questions: [
        {
          question: "How is EMI calculated?",
          answer:
            "EMI (Equated Monthly Installment) is calculated based on the loan amount, interest rate, and loan tenure. You can use our EMI calculator to estimate your monthly payments.",
        },
        {
          question: "Can I prepay my loan?",
          answer:
            "Yes, most loans allow prepayment, but some may have prepayment charges. Check your loan agreement for details.",
        },
        {
          question: "What happens if I miss an EMI payment?",
          answer:
            "Missing an EMI payment may result in late fees and a negative impact on your credit score. Contact our support team immediately if you anticipate difficulty in making a payment.",
        },
      ],
    },
    {
      title: "Interest Rates and Fees",
      questions: [
        {
          question: "What is the interest rate for loans?",
          answer:
            "Interest rates vary depending on the type of loan, your credit score, and other factors. Check the loan details or contact our support team for specific rates.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No, we are transparent about all fees, including processing fees, prepayment charges, and late payment fees. These will be clearly mentioned in your loan agreement.",
        },
        {
          question: "Can I negotiate the interest rate?",
          answer:
            "Interest rates are generally based on your credit profile and loan type. However, you can contact our support team to discuss your options.",
        },
      ],
    },
    {
      title: "Account Management",
      questions: [
        {
          question: "How do I check my loan status?",
          answer:
            "Log in to your account and navigate to the 'Loan Status' section to view the current status of your application or loan.",
        },
        {
          question: "Can I update my personal information?",
          answer:
            "Yes, you can update your personal information by logging into your account and navigating to the 'Profile' section.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can reach our customer support team via email at support@loanmanagement.com or call us at +91-1234567890. We are available 24/7 to assist you.",
        },
      ],
    },
    {
      title: "Technical Issues",
      questions: [
        {
          question: "What should I do if I forget my password?",
          answer:
            "Click on the 'Forgot Password' link on the login page, enter your registered email, and follow the instructions to reset your password.",
        },
        {
          question: "Why am I unable to log in to my account?",
          answer:
            "Ensure that you are using the correct email and password. If the issue persists, try resetting your password or contact our support team.",
        },
        {
          question: "Is the website mobile-friendly?",
          answer:
            "Yes, our website is fully responsive and works seamlessly on all devices, including smartphones and tablets.",
        },
      ],
    },
  ];

  // Function to toggle the answer visibility
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the answer
    }
  };

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="faq-category">
          <h2>{category.title}</h2>
          {category.questions.map((faq, questionIndex) => {
            const uniqueIndex = `${categoryIndex}-${questionIndex}`; // Unique index for each question
            return (
              <div key={uniqueIndex} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(uniqueIndex)}
                >
                  {faq.question}
                  <span>{activeIndex === uniqueIndex ? "−" : "+"}</span>
                </div>
                {activeIndex === uniqueIndex && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Faqs;