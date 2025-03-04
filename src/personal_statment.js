import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./personal_statment.css";

export default function PersonalStatement() {
  const [text, setText] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `.repeat(3)
  );

  const maxChars = 4000;

  return (
    <div className="container mt-4">
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Personal Statement</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Predicted Grades</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Reference</a></li>
              <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>

     
      <h2 className="text-center mt-4">Personal Statement</h2>

    
      <div className="scrollable-box mt-3">
        <p className="content">{text}</p>
      </div>

      <div className="char-counter">
        <small>{text.length} of {maxChars} Chr</small>
      </div>
    </div>
  );
}
