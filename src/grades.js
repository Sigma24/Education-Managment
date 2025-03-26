import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./grades.css";

export default function Grades() {
  const [gradesData, setGradesData] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'Student') {
      if (!user.id) {
        console.error("StudentID ID missing in user data");
      } else {
        setStudent(user.id);

        
        fetch(`http://127.0.0.1:5000/api/StudentGrades?sID=${user.id}`)
          .then((response) => response.json())
          .then((data) => setGradesData(data.grades || []))
          .catch((error) => console.error("Error fetching grades data:", error));
      }
    }
  }, []);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <span className="navbar-brand">Predicted Grades</span>
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">References</a>
            <a className="nav-link" href="#">Personal Statement</a>
            <a className="nav-link" href="#">My Profile</a>
          </div>
        </div>
      </nav>

      <div className="table-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Teacher(s)</th>
              <th>Subject(s)</th>
              <th>Grade(s)</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.length > 0 ? (
              gradesData.map((item, index) => (
                <tr key={index}>
                  <td>{item.Teacher_Name}</td>
                  <td>{item.Subject}</td>
                  <td>{item.Grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
