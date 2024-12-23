import React, { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Dashboard/Sidebar";
import QuestionPaperGenerator from "./Components/Dashboard/QuestionPaperGenerator";
import Login from "./Components/Pages/Login";

function App() {
  const [currentView, setCurrentView] = useState("login"); // Tracks the current component to render

  const renderView = () => {
    switch (currentView) {
      case "login":
        return <Login onLogin={() => setCurrentView("dashboard")} />;
      case "dashboard":
        return (
          <div style={{ display: "flex" }}>
            <Sidebar onSelect={(view) => setCurrentView(view)} />
            <Dashboard />
          </div>
        );
      case "generateQuestionPaper":
        return <QuestionPaperGenerator />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return <div>{renderView()}</div>;
}

export default App;
