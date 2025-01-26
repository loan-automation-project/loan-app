// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import User from "../../../../assets/pictures/User.jpg"; // Adjust the path as needed
// import "./Header.css"; // Import the CSS file for styling

// const Header = () => {
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   // Sample logged-in user data
//   const loggedInUser = {
//     name: "Angela",
//     role: "User",
//     profileImage: User, // Placeholder image URL
//   };

//   // Handle logout
//   const handleLogout = () => {
//     navigate("/"); // Redirect to the home page
//   };

//   return (
//     <div className="header">
//       <div className="header-left">
//         <div className="header-links">
//           <a onClick={() => navigate("/loan-application")} className="header-link">
//             Apply for Loan
//           </a>
//           <a onClick={() => navigate("/emi-calculator")} className="header-link">
//             EMI Calculator
//           </a>
//           <a onClick={() => navigate("/eligibility")} className="header-link">
//             Eligibility
//           </a>
//         </div>
//       </div>
//       <div className="header-right">
//         <div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
//           <img src={loggedInUser.profileImage} alt="Profile" className="profile-image" />
//           <div className="user-info">
//             <span className="user-name">{loggedInUser.name}</span>
//             <span className="user-role">{loggedInUser.role}</span>
//           </div>
//           {/* Profile Dropdown */}
//           {isProfileDropdownOpen && (
//             <div className="profile-dropdown">
//               <button className="logout-button" onClick={handleLogout}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../../../assets/pictures/User.jpg"; // Adjust the path as needed
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Sample logged-in user data
  const loggedInUser = {
    name: "Angela",
    role: "User",
    profileImage: User, // Placeholder image URL
  };

  // Handle logout
  const handleLogout = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="header">
      {/* Back Button */}
      <div className="header-left">
        <button className="back-button" onClick={() => navigate("/user-dashboard")}>
          &larr; Back
        </button>
      </div>

      {/* User Profile */}
      <div className="header-right">
        <div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
          <img src={loggedInUser.profileImage} alt="Profile" className="profile-image" />
          <div className="user-info">
            <span className="user-name">{loggedInUser.name}</span>
            <span className="user-role">{loggedInUser.role}</span>
          </div>
          {/* Profile Dropdown */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;