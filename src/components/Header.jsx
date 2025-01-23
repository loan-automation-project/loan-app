import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // Create a separate CSS file for the header

function Header() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Header;
