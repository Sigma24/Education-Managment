import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./grades.css";

export default function Grades() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <span className="navbar-brand">Predicted Grades</span>
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              References
            </a>
            <a className="nav-link" href="#">
              Personal Statement
            </a>
            <a className="nav-link" href="#">
              My Profile
            </a>
          </div>
        </div>
      </nav>

      {/* Table */}
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
            <tr>
              <td>Teacher 1</td>
              <td>Subject 1</td>
              <td>Grade 1</td>
            </tr>
            <tr>
              <td>Teacher 2</td>
              <td>Subject 2</td>
              <td>Grade 2</td>
            </tr>
            <tr>
              <td>Teacher 3</td>
              <td>Subject 3</td>
              <td>Grade 3</td>
            </tr>
            <tr>
              <td>Teacher 4</td>
              <td>Subject 4</td>
              <td>Grade 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}