import React from "react";
import "./Login.css"; // Create this CSS file for custom styles
import Navbar from "../Navbar/Navbar";


const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Perform login logic here (if needed)
    if (onLogin) onLogin(); // Navigate to dashboard
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-frame">
        <h1>Welcome to QPEasy!</h1>
        <p>Your ultimate platform for question paper management!</p>
        <div className="login-buttons">
          <button className="login-teacher-btn" onClick={handleLogin}>
            Login as Teacher
          </button>
          <button className="login-student-btn" onClick={handleLogin}>
            Login as Student
          </button>
        </div>
        <div className="info-box">
          <p>
            Access powerful tools for generating, evaluating, and managing
            question papers efficiently!
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
