import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";

export default function MyProfile() {
  return (
    <div className="container-fluid">
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Profile</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Predicted Grades</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Reference</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="profile-header text-center">
        <h2>Name: XYZ</h2>
        <h3>Year: XYZ</h3>
        <h4>Subjects: ABC, DEF, GHI</h4>
      </div>

      <div className="row justify-content-center mt-4">
      
        <div className="col-md-4">
          <div className="info-card">
            <h5>School Details</h5>
            <p><strong>Name:</strong></p>
            <p><strong>Address:</strong></p>
            <p><strong>Telephone:</strong></p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="info-card">
            <h5>Personal Details</h5>
            <p><strong>Username:</strong> nasez009.309</p>
            <p><strong>Name:</strong></p>
            <p><strong>Date Of Birth:</strong></p>
            <p><strong>Email:</strong></p>
            <p><strong>Form Tutor:</strong></p>
            <p><strong>Address:</strong></p>
            <p><strong>Tel. Number:</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
