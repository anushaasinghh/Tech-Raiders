import React, { useState } from "react";

const GenerateQuestionPaper = () => {
  const [formData, setFormData] = useState({
    subject: "",
    syllabus: null,
    mcq: 0,
    mcqMarks: 0,
    tf: 0,
    tfMarks: 0,
    ar: 0,
    arMarks: 0,
    fblanks: 0,
    fblanksMarks: 0,
    shortAns: 0,
    shortAnsMarks: 0,
    longAns: 0,
    longAnsMarks: 0,
    difficulty: "Easy",
    degree: "",
    year: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      syllabus: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/generateQuestions", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Question Paper Generated Successfully!");
      } else {
        alert("Error in generating question paper.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ color: "#FF6347", textAlign: "center", marginBottom: "20px" }}>
        Generate Question Paper
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Subject */}
        <div>
          <label htmlFor="subject" style={{ fontWeight: "bold" }}>
            Subject Name:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject name"
            value={formData.subject}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Syllabus Upload */}
        <div>
          <label htmlFor="syllabus" style={{ fontWeight: "bold" }}>
            Upload Syllabus Document:
          </label>
          <input
            type="file"
            id="syllabus"
            name="syllabus"
            onChange={handleFileChange}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
          {/* Add the image as an icon */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAclBMVEX39/dBQUNBQUH8/Pz///8vLzLPz88tLS08PDxtbW0+PkDx8fHi4uLa2tq9vb0zMzI0NDZSUlJ+fn7t7e21tbU4ODrExMSnp6d3d3diYmRJSUloaGiwsLChoaHU1NVZWVsqKiyOjo6GhogmJiWXl5dXV1Y8vFiwAAAE80lEQVR4nO2d6ZKiMBRGMYtgUEk3ghvt0jPz/q84BNuFzUTRYubynX9WY7U5dbMnF88DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjAL/T9S/5BciuCx7t0vsiyxTydxflHeLqS65hl33t9kFIXyMMhWR8X0/wPff+2fwEu4vlnInWiRiVUoiX7TkPR9w/sG+6lq0AGbNSICjT73g26xvFw+SFVs55LMMn93BuqJO4tWRTcFXSyJD/mw4wkMd9o1VLDapL24+G1SWK6tlSxsqTDZziwQOKZ71DFbmBBkA4pkHi4kg8JKgLJPw6n2eazTeLWCJUDKVrHA3Ek0ihgzyhiAZsOwpFY/HrCzwkldwNwJLLDMyF0RtLv/cXCZ10UqWhMPI54GnXwYwiCGWlHfBZ1CSEDCzZx38V4JyF7qi8rKWLBmnAYiW3Szc+J6Ei2yeZLv2MInWCHlGocTaVDLVP2yS1Tm7DvsrwHvnWY2qvJ3uGphGZV4wvfXvaRjscHh8d8kqPscOQQHn4mxNGhTVcUezXxpR1KPjEVaOPgUhJssUOHdnikzUyejx0Wk9SenCK+tAcRi7KiFRZHbe/5NLkw4oE9iILtudQOVU1tiXVqPHXozpLp+emxw9O/pnf/43+HmNhX82V2iYu8qtmeZslvWmEU26ceyeSmcQk/bFWNsQ2pxogv7MtE+nZdmlsHkIzRGj7ylbX99bNSgR0GkMlvSopCq6F6B2UdjJMaYTsMBnV1i8zpO/0U5x3wpa3WyKwWEeLb9iVKo0dha4rUpKGwoW0Aqb/oKPL+2M5ZNe2yWqtasKIzMorbTuqdw2EhqieJzWdbr0ZpKju1DRw3zBCWvpGzuf8tQuuz9imXUkxVFSllWz5hEZlpGp9HFkWmvLUosn/Fn/VXqNfCs3cpIrO/z5fvUkRmYPQ2RREUQVFnRYTaoszhUNFzivor1GtBp2+FjxsV5VJU6VObonxg2SiM0NCxZQJSLvfdKGoOKcXITEAap7Fyaqau4rKM36oo+SwenNf3RChNY3l9MSRvR0z53BR5RXtW00xpMaRhSe2nqe2kKCG0pNawof8KRXRGjo3rh42KLiXmToooLe83bBI1KZpNL4wjuyJSm0QeX1X7tLqiEdNXkms336KIEdvUr29Y1xS10qqI1oZ1/djDCxTROvaQd/uVwzNXRcxC0KKI1pZ+wxGsi6LARtSiiNoRLE9UDvKdFa0mNrZFtNQUkTvIVxs9nhcyuAPFc1VFlDb0f6gcKn50raeqiNIU9kzlaHpXRRSPpnteeQWomyJaI+sz5WsyZjHkEURZkdz1XZy3ULpsxfRi/Ai7r9sEEcmRYhCZ6Xtpvq/lQ9yeoyF0JKQCXz6eTKWRA5n9sxovuj6sad5pPBEyhxtXNkhfQvf4zOHengVFO5VBPp2VHe+hK+IJMYq0Kt0MkU+rUiTn6aJI0jdUpHh6us1WxBZj2xCpftKRYtTboTMm3dwzhvRg0s3ljuLV4432oJIWeubg2iO5QQ2JGlTqS8/MaZFA1QqfbyJHScr/Qz8RXxPcW45c+rbhJnP2flKC37/ArxK5Hm5KcEORWD5qTywfDT2xvMG8nmDV8noCZV5PMHRBBfWXXPinl1wI+LlSf1UKXinTCF64AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAkfwFXR0yfHyP9TAAAAABJRU5ErkJggg=="
            alt="Upload Icon"
            style={{ width: "80px", height: "60px" , marginTop: "10px", display: "block", margin: "0 auto" }}

          />
        </div>

        {/* MCQ Input */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="mcq" style={{ fontWeight: "bold" }}>
              Number of MCQs:
            </label>
            <input
              type="number"
              id="mcq"
              name="mcq"
              value={formData.mcq}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="mcqMarks" style={{ fontWeight: "bold" }}>
              Marks per MCQ:
            </label>
            <input
              type="number"
              id="mcqMarks"
              name="mcqMarks"
              value={formData.mcqMarks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* True/False Input */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="tf" style={{ fontWeight: "bold" }}>
              Number of True/False Questions:
            </label>
            <input
              type="number"
              id="tf"
              name="tf"
              value={formData.tf}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="tfMarks" style={{ fontWeight: "bold" }}>
              Marks per True/False:
            </label>
            <input
              type="number"
              id="tfMarks"
              name="tfMarks"
              value={formData.tfMarks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* Assertion/Reason Input */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="ar" style={{ fontWeight: "bold" }}>
              Number of Assertion/Reason Questions:
            </label>
            <input
              type="number"
              id="ar"
              name="ar"
              value={formData.ar}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="arMarks" style={{ fontWeight: "bold" }}>
              Marks per Assertion/Reason:
            </label>
            <input
              type="number"
              id="arMarks"
              name="arMarks"
              value={formData.arMarks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* Fill-in-the-Blanks Input */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="fblanks" style={{ fontWeight: "bold" }}>
              Number of Fill-in-the-Blanks Questions:
            </label>
            <input
              type="number"
              id="fblanks"
              name="fblanks"
              value={formData.fblanks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="fblanksMarks" style={{ fontWeight: "bold" }}>
              Marks per Fill-in-the-Blanks:
            </label>
            <input
              type="number"
              id="fblanksMarks"
              name="fblanksMarks"
              value={formData.fblanksMarks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* Short Answer Type Input */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="shortAns" style={{ fontWeight: "bold" }}>
              Number of Short Answer Questions:
            </label>
            <input
              type="number"
              id="shortAns"
              name="shortAns"
              value={formData.shortAns}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="shortAnsMarks" style={{ fontWeight: "bold" }}>
              Marks per Short Answer:
            </label>
            <input
              type="number"
              id="shortAnsMarks"
              name="shortAnsMarks"
              value={formData.shortAnsMarks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* Long Answer Type Input */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="longAns" style={{ fontWeight: "bold" }}>
              Number of Long Answer Questions:
            </label>
            <input
              type="number"
              id="longAns"
              name="longAns"
              value={formData.longAns}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="longAnsMarks" style={{ fontWeight: "bold" }}>
              Marks per Long Answer:
            </label>
            <input
              type="number"
              id="longAnsMarks"
              name="longAnsMarks"
              value={formData.longAnsMarks}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>

        {/* Degree */}
        <div>
          <label htmlFor="degree" style={{ fontWeight: "bold" }}>
            Degree:
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="e.g., MCA"
            value={formData.degree}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Difficulty Level */}
        <div>
          <label htmlFor="difficulty" style={{ fontWeight: "bold" }}>
            Difficulty Level:
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Year */}
        <div>
          <label htmlFor="year" style={{ fontWeight: "bold" }}>
            Year:
          </label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            {[1, 2, 3, 4, 5].map((option) => (
              <option key={option} value={option}>
                {option} Year
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#FF6347",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Generate Question Paper
        </button>
      </form>
    </div>
  );
};

export default GenerateQuestionPaper;
