import React from "react";
// import FAQs from "./FAQs"; // Adjust the path as needed
import Faqs from './Faqs';
import Footer from "../dashboard/user-dashboard/user-footer/Footer"; // Adjust the path as needed
import Header from "../dashboard/user-dashboard/user-header/Header"; // Adjust the path as needed
// import "./FAQs.css"; // Import the CSS file for styling (if needed)


function FaqPage() {
  return (
    <div>
      <Header />
      <Faqs />
      <Footer />
    </div>
  );
}

export default FaqPage;