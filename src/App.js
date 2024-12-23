import React, { useState } from "react";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Page/Login";
import Navbar from "./Component/Navbar/Navbar"; 
function App() {
  const [currentView, setCurrentView] = useState("login");

  const renderView = () => {
    switch (currentView) {
      case "login":
        return <Login onLogin={() => setCurrentView("dashboard")} />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div>
      {/* Render the Navbar only if the current view is not "login" */}
      {currentView !== "login" && <Navbar />}
      {renderView()}
    </div>
  );
}

export default App;
