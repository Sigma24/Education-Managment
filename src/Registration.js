import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css";

const RegistrationForm = () => {
  const [Data, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "",
    dob: "",
  });



  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const {  name, value } = e.target;
    setFormData({ ...Data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", Data);
    setShowModal(true);

   
    setTimeout(() => {
      setShowModal(false);
      navigate("/login"); 
    }, 2000);
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={Data.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={Data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={Data.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={Data.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Role:</label>
            <select
              name="role"
              value={Data.role}
              onChange={handleChange}
              className="custom-dropdown"
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={Data.dob}
              onChange={handleChange}
              className="custom-date"
              required
            />
          </div>
          <div className="form-group gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={Data.gender === "male"}
                onChange={handleChange}
                required
              />
              &nbsp;Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={Data.gender === "female"}
                onChange={handleChange}
              />
              &nbsp;Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={Data.gender === "other"}
                onChange={handleChange}
              />
              &nbsp;Other
            </label>
          </div>

          <button type="submit" className="btn-register">
            Register
          </button>

        
          <p className="signin-link" >
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </form>
      </div>

      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="check-icon ">✔</span>
            <p>User Registered Successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
