import React from "react";

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Perform login logic here (if needed)
    if (onLogin) onLogin(); // Navigate to dashboard
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <button onClick={handleLogin}>Login as Teacher</button>
    </div>
  );
};

export default Login;
