import React, { useState } from "react";

const QuestionPaperGenerator = () => {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [mcqs, setMcqs] = useState(5);
  const [threeMarks, setThreeMarks] = useState(3);
  const [fiveMarks, setFiveMarks] = useState(2);

  const handleGenerate = () => {
    if (!subject || !difficulty) {
      alert("Please select both subject and difficulty level!");
      return;
    }
    alert(`Question Paper for ${subject} generated with difficulty ${difficulty}`);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Generate Question Paper</h2>

      {/* Subject Selection */}
      <div className="form-group">
        <label>Subject</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ display: "block", width: "100%", padding: "5px" }}
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
      </div>

      {/* Difficulty Level */}
      <div className="form-group">
        <label>Difficulty Level</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={{ display: "block", width: "100%", padding: "5px" }}
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Question Count Sliders */}
      <div className="form-group">
        <label>Number of MCQs: {mcqs}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={mcqs}
          onChange={(e) => setMcqs(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Number of 3-mark Questions: {threeMarks}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={threeMarks}
          onChange={(e) => setThreeMarks(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Number of 5-mark Questions: {fiveMarks}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={fiveMarks}
          onChange={(e) => setFiveMarks(e.target.value)}
        />
      </div>

      <button onClick={handleGenerate} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Generate Question Paper
      </button>
    </div>
  );
};

export default QuestionPaperGenerator;
