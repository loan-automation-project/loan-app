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



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

// Use online URLs for profile images
const defaultImages = {
  male: "https://cdn-icons-png.flaticon.com/512/0/93.png",
  female: "https://cdn-icons-png.flaticon.com/512/0/89.png"
};

const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData') || '{"gender": "male"}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate("/");
  };

  // Get default profile image based on gender
  const getProfileImage = () => {
    return userData.gender?.toLowerCase() === 'female' ? defaultImages.female : defaultImages.male;
  };

  return (
    <div className="header">
      <div className="header-left">
        <button className="back-button" onClick={() => navigate("/user-dashboard")}>
          &larr; Back
        </button>
      </div>

      {/* User Profile */}
      <div className="header-right">
        <div className="user-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
          <img src={getProfileImage()} alt="Profile" className="profile-image" />
          <div className="user-info">
            <span className="user-name">{userData.username || 'Guest'}</span>
            <span className="user-role">User</span>
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