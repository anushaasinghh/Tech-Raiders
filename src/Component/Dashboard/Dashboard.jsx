import React from "react";
import Sidebar from "./Sidebar";
import QuestionPaperGenerator from "./QuestionPaperGenerator";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <h1>Welcome, Teacher!</h1>
        <QuestionPaperGenerator />
      </div>
    </div>
  );
};

export default Dashboard;
