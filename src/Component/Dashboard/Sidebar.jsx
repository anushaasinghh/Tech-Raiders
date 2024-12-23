import React from "react";

const Sidebar = ({ onSelect }) => {
  const handleSelect = (view) => {
    if (onSelect) onSelect(view);
  };

  return (
    <div className="sidebar" style={{ width: "200px", padding: "10px", background: "#f4f4f4" }}>
      <h2>Teacher Dashboard</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li onClick={() => handleSelect("generateQuestionPaper")}>Generate Question Paper</li>
        <li onClick={() => handleSelect("autoEvaluate")}>Upload Answer Scripts</li>
        <li onClick={() => handleSelect("resultsGeneration")}>Generate Results</li>
      </ul>
    </div>
  );
};

export default Sidebar;
