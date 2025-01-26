



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import slider1 from "../assets/pictures/slider1.jpg";
// import slider2 from "../assets/pictures/slider2.jpg";
// import slider3 from "../assets/pictures/slider3.jpg";
// import { CSSTransition, TransitionGroup } from "react-transition-group"; // For animations
// import "./HomePage.css";

// function HomePage() {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: slider1,
//       text: "Personal Loan to Suit Your Needs",
//     },
//     {
//       image: slider2,
//       text: "Lowest Car Loan Rate 9.60%\nWe provide an excellent service Loan company.",
//     },
//     {
//       image: slider3,
//       text: "Student Loans with Great Rates 11.10%\nWe provide an excellent service for all types of\nloans in India and offer service, advice and direction.",
//     },
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [slides.length]);

//   // Handle manual slide change
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="homepage-container">
//       {/* Header */}
//       <header className="header">
//         <div className="header-left">
//           <a onClick={() => navigate("/")} className="nav-link">
//             Home
//           </a>
//           <a onClick={() => navigate("/about")} className="nav-link">
//             About
//           </a>
//         </div>
//         <div className="header-right">
//           <button
//             className="header-button login-button"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>
//           <button
//             className="header-button register-button"
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Carousel Section */}
//         <section className="carousel-section">
//           <TransitionGroup>
//             <CSSTransition
//               key={currentSlide}
//               timeout={500}
//               classNames="carousel-slide"
//             >
//               <div className="carousel">
//                 <img
//                   src={slides[currentSlide].image}
//                   alt={`Slide ${currentSlide + 1}`}
//                   className="carousel-image"
//                 />
//                 <div className="carousel-text">
//                   {slides[currentSlide].text.split("\n").map((line, index) => (
//                     <p key={index}>{line}</p>
//                   ))}
//                 </div>
//               </div>
//             </CSSTransition>
//           </TransitionGroup>
//           <div className="carousel-dots">
//             {slides.map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${currentSlide === index ? "active" : ""}`}
//                 onClick={() => goToSlide(index)}
//               ></span>
//             ))}
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="how-it-works">
//           <h2>How Does It Work?</h2>
//           <p>We have a fast and easy application process.</p>
//           <div className="steps-cards">
//             <div className="step-card">
//               <h3>1. Check Your Eligibility</h3>
//               <p>Quick and simple eligibility check.</p>
//             </div>
//             <div className="step-card">
//               <h3>2. Choose Loan Amount</h3>
//               <p>Select the amount that suits you.</p>
//             </div>
//             <div className="step-card">
//               <h3>3. Get Your Cash</h3>
//               <p>Fast processing of your loan application.</p>
//             </div>
//           </div>
//         </section>

//         {/* Reasons to Choose Us Section */}
//         <section className="reasons-to-choose-us">
//           <h2>Reasons to Choose Us</h2>
//           <div className="reasons-cards">
//             <div className="reason-card">
//               <h3>EMI Calculator</h3>
//               <p>Calculate your monthly EMI easily.</p>
//             </div>
//             <div className="reason-card">
//               <h3>Customers Love Us!</h3>
//               <p>Our customers are happy with our service.</p>
//             </div>
//             <div className="reason-card">
//               <h3>Easy Documentation</h3>
//               <p>Simplified and quick documentation process.</p>
//             </div>
//             <div className="reason-card">
//               <h3>Fast Approval</h3>
//               <p>Your loan is approved in no time.</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2025 Your Company Name. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import slider1 from "../assets/pictures/slider1.jpg";
import slider2 from "../assets/pictures/slider2.jpg";
import slider3 from "../assets/pictures/slider3.jpg";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slider1,
      text: "Personal Loan to Suit Your Needs",
    },
    {
      image: slider2,
      text: "Lowest Car Loan Rate 9.60%\nWe provide an excellent service Loan company.",
    },
    {
      image: slider3,
      text: "Student Loans with Great Rates 11.10%\nWe provide an excellent service for all types of\nloans in India and offer service, advice and direction.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a onClick={() => navigate("/")} className="nav-link">
            Home
          </a>
          <a onClick={() => navigate("/about")} className="nav-link">
            About
          </a>
        </div>
        <div className="header-right">
          <button
            className="header-button login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="header-button register-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Carousel Section */}
        <section className="carousel-section">
          <div className="carousel">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="carousel-image"
            />
            <div className="carousel-text">
              {slides[currentSlide].text.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How Does It Work?</h2>
          <p>We have a fast and easy application process.</p>
          <div className="steps-cards">
            <div className="step-card">
              <h3>1. Check Your Eligibility</h3>
              <p>Quick and simple eligibility check.</p>
            </div>
            <div className="step-card">
              <h3>2. Choose Loan Amount</h3>
              <p>Select the amount that suits you.</p>
            </div>
            <div className="step-card">
              <h3>3. Get Your Cash</h3>
              <p>Fast processing of your loan application.</p>
            </div>
          </div>
        </section>

        {/* Reasons to Choose Us Section */}
        <section className="reasons-to-choose-us">
          <h2>Reasons to Choose Us</h2>
          <div className="reasons-cards">
            <div className="reason-card">
              <h3>EMI Calculator</h3>
              <p>Calculate your monthly EMI easily.</p>
            </div>
            <div className="reason-card">
              <h3>Customers Love Us!</h3>
              <p>Our customers are happy with our service.</p>
            </div>
            <div className="reason-card">
              <h3>Easy Documentation</h3>
              <p>Simplified and quick documentation process.</p>
            </div>
            <div className="reason-card">
              <h3>Fast Approval</h3>
              <p>Your loan is approved in no time.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;


/* HomePage.css */





