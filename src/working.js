import React, { useState,useEffect } from "react";
import { TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "bootstrap/dist/css/bootstrap.min.css";
import "./working.css";

export default function Working() {
   
  
  
  const [selectedStudent, setSelectedStudent] = useState("");
  const [referenceText, setReferenceText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const[students,setstudents]=useState([])
  const[studentid,setstudenid]=useState(0)
  
  const[teacherid,setteacherid]=useState([])


useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'Teacher') {
      if (!user.id) {
        console.error("Teacher ID missing in user data");
      } else {
        setteacherid(user.id);
      }
    }
  }, []);
  useEffect(() => {
    const fetchStudents = async () => {
      fetch("http://127.0.0.1:5000/api/getStudents")
        .then((response) => response.json())
        .then((data) => setstudents(data))
        .catch((error) => console.log(`error fetching data ${error}`));
    };
    fetchStudents();
  }, []);





  const handleSave = async () => {
    if (!studentid|| !referenceText.trim()) {
      alert("Please select a student and write a reference before saving.");
      return;
    }

    const requestData = {
      sID: studentid,
      tID: teacherid,
      txt: referenceText,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/treferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      alert(result.message || "Reference added successfully");
      
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Error submitting reference.");
    }
  };  



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
      
      
      <div className="references-container">
       
        <div className="student-list">
          <h5>View your students</h5>
          <TextField label="Find a student" variant="outlined" fullWidth size="small" />
          <ul className="list-group mt-2">
            {students.map((student) => (
              <li
                key={student.id}
                className={`list-group-item ${selectedStudent === student.name? "active" : ""}`}
                onClick={() => 
                  {setSelectedStudent(student.name)
                    setstudenid(student.id)
                  }}
              >
                {student.name}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="reference-editor">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{selectedStudent}</h5>
            <IconButton 
             onClick={() => {
                if (isEditing) {
                handleSave();
                 }
                setIsEditing(!isEditing);
  }}
>
  {isEditing ? <SaveIcon /> : <EditIcon />}
</IconButton>
          </div>
          <TextField
           
            multiline
            fullWidth
            variant="outlined"
            value={referenceText}
            onChange={(e) =>{
              if(e.target.value.length <=100){
                setReferenceText(e.target.value);
              }
            }}
            disabled={!isEditing}
            rows={6}
            className="mt-2"
          />
          <small className="text-muted">{`${referenceText.length===100?"can't exceed more than 100 chr":referenceText.length+"of 100"}`} </small>
        </div>
      </div>
    </div>
  );
}
