// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AboutUs.css";

// function AboutUs() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Contact Form Submitted by ${name}, Email: ${email}, Message: ${message}`);
//     alert("Thank you for reaching out to us!");
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="aboutus-container">
//       {/* Header */}
//       <header className="header">
//         <div className="header-left">
//           <a href="/" className="nav-link">
//             Home
//           </a>
//           <a href="/about" className="nav-link">
//             About
//           </a>
//         </div>
//         <div className="header-right">
//           <button className="header-button login-button" onClick={() => navigate("/login")}>
//             Login
//           </button>
//           <button className="header-button register-button" onClick={() => navigate("/register")}>
//             Register
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="aboutus-content">
//         <h1>About Us</h1>
//         <section className="aboutus-description">
//           <h2>Who We Are?</h2>
//           <p>
//             We are a dedicated team committed to simplifying loan management. Our platform provides 
//             a seamless way to manage, track, and apply for loans. Our mission is to make financial 
//             services accessible and user-friendly for everyone.
//           </p>
//         </section>

//         {/* Contact Us Form */}
//         <section className="contact-us">
//           <h2>Feel Free to Contact Us</h2>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="contact-submit">
//               Send Message
//             </button>
//           </form>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <p>All rights reserved &copy; Loan Management System</p>
//       </footer>
//     </div>
//   );
// }

// export default AboutUs;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Contact Form Submitted by ${name}, Email: ${email}, Message: ${message}`);
    alert("Thank you for reaching out to us!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="aboutus-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
        </div>
        <div className="header-right">
          <button className="header-button login-button" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="header-button register-button" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="aboutus-content">
        {/* Section 1: Image on the left, content on the right */}
        <section className="aboutus-section">
          <div className="aboutus-image">
            <img
              src="https://via.placeholder.com/400x300" // Replace with your image URL
              alt="About Us"
            />
          </div>
          <div className="aboutus-text">
            <h2>Who We Are?</h2>
            <p>
              Our Company is the leading lender to digital India. We created it to handle all loan-related
              transactions in a very accurate and convenient way. It is very helpful for banking staff who
              are in charge of loan management. It provides a reliable and convenient form for every loan
              and EMI-related transaction and their related details. It is also a very user-friendly and
              understandable way of storing customer details and transaction information.
            </p>
            <p>
              Powered by rigorous innovation and technological advancements, we passionately serve our
              customers with cutting-edge financial services to help them.
            </p>
          </div>
        </section>

        {/* Section 2: Content on the left, image on the right */}
        <section className="contact-section">
          <div className="contact-text">
            <h2>Feel Free to Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-image">
            <img
              src="https://via.placeholder.com/400x300" // Replace with your image URL
              alt="Contact Us"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>All rights reserved &copy; Loan Management System</p>
      </footer>
    </div>
  );
}

export default AboutUs;