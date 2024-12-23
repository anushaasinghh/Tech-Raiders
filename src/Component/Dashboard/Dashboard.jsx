import React from "react";
import QuestionPaperGenerator from "./QuestionPaperGenerator";

const Dashboard = () => {
  return (
    <div style={{ padding: "10px"}}>
      <h2 style={{ color: "black" , marginLeft: "20px"}}>Welcome Teacher!</h2>

      <QuestionPaperGenerator />
    </div>
  );
};

export default Dashboard;
