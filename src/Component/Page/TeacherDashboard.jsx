import React, { useState } from "react";

const TeacherDashboard = () => {
  const [mcqValue, setMcqValue] = useState(10);
  const [threeMarksValue, setThreeMarksValue] = useState(10);
  const [fiveMarksValue, setFiveMarksValue] = useState(5);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#2c2c2c",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "#1c1c1c",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          width: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Generate Question Paper
        </h1>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="file-upload">Upload File</label>
          <input
            type="file"
            id="file-upload"
            style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
          />
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>
            <input type="checkbox" id="mcq" defaultChecked /> MCQ
          </label>
          <label>
            <input type="checkbox" id="descriptive" defaultChecked /> Descriptive
          </label>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="number-mcq">Number of MCQ</label>
          <input
            type="range"
            id="number-mcq"
            min="0"
            max="20"
            value={mcqValue}
            onChange={(e) => setMcqValue(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "10px",
              appearance: "none",
              background: "#444",
              height: "5px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <div style={{ textAlign: "right" }}>{mcqValue}</div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="number-3marks">Number of 3-marks Questions</label>
          <input
            type="range"
            id="number-3marks"
            min="0"
            max="20"
            value={threeMarksValue}
            onChange={(e) => setThreeMarksValue(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "10px",
              appearance: "none",
              background: "#444",
              height: "5px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <div style={{ textAlign: "right" }}>{threeMarksValue}</div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="number-5marks">Number of 5-marks Questions</label>
          <input
            type="range"
            id="number-5marks"
            min="0"
            max="10"
            value={fiveMarksValue}
            onChange={(e) => setFiveMarksValue(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "10px",
              appearance: "none",
              background: "#444",
              height: "5px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <div style={{ textAlign: "right" }}>{fiveMarksValue}</div>
        </div>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="difficulty">Difficulty Level</label>
          <select id="difficulty" style={{ width: "auto", padding: "5px" }}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div
          style={{
            textAlign: "right",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Total Marks: 100
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#ff4500",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e03e00")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4500")}
        >
          Generate Question Paper
        </button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
