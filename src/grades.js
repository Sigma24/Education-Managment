import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./grades.css";

export default function Grades() {
  const [gradesData, setGradesData] = useState([]);

  // Simulate API call
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/grades"); // Replace with your API endpoint
        const data = await response.json();
        setGradesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
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

      {/* Scrollable Table Container */}
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
                  <td>{item.teacher}</td>
                  <td>{item.subject}</td>
                  <td>{item.grade}</td>
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
