import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "bootstrap/dist/css/bootstrap.min.css";
import "./working.css";

export default function Working() {
  const students = [
    "Ahmad Abbas", "Amina Akhtar", "Bilal Baig", "Bushra Begum", "Cyrus Chaudhry",
    "Camila Chisht", "Dua Durrani", "Ehsan Elahi", "Esma Farhan", "Fatima Fakhro",
    "Ghazal Ghani", "Ghazia Gillani", "Hamza Hashim", "Hina Ibrahim", "Iqra Idris"
  ];
  
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [referenceText, setReferenceText] = useState("HI i am ahmad abas");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">References</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Predicted Grades</a></li>
              <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Student List & Reference Editor */}
      <div className="references-container">
        {/* Student List */}
        <div className="student-list">
          <h5>View your students</h5>
          <TextField label="Find a student" variant="outlined" fullWidth size="small" />
          <ul className="list-group mt-2">
            {students.map((student, index) => (
              <li
                key={index}
                className={`list-group-item ${selectedStudent === student ? "active" : ""}`}
                onClick={() => setSelectedStudent(student)}
              >
                {student}
              </li>
            ))}
          </ul>
        </div>

        {/* Reference Editor */}
        <div className="reference-editor">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{selectedStudent}</h5>
            <IconButton onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <SaveIcon /> : <EditIcon />}
            </IconButton>
          </div>
          <TextField
            multiline
            fullWidth
            variant="outlined"
            value={referenceText}
            onChange={(e) => setReferenceText(e.target.value)}
            disabled={!isEditing}
            rows={6}
            className="mt-2"
          />
          <small className="text-muted">{referenceText.length} of 4000 Chr</small>
        </div>
      </div>
    </div>
  );
}
