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
    dj: "",
  });



  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const {  name, value } = e.target;
    setFormData({ ...Data, [name]: value });
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userdata = {
      name: Data.name,
      email: Data.email,
      password: Data.password,
      dj: Data.dj,
      
    };
  
    if (Data.password.length !== 8 || Data.password !== Data.confirmPassword) {
      alert("Password must be exactly 8 characters or confirm password doesn't match.");
      return;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:5000/api/Registration", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(userdata) 
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("User Registered successfully");
        console.log("Server response:", result);
      } else {
        console.log("Error posting data:", result.error);
      }
  
    } catch (error) {
      alert(`Error posting data: ${error}`);
    }
  
  
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
            <label className="form-label">Date Joined:</label>
            <input
              type="date"
              name="dob"
              value={Data.dob}
              onChange={handleChange}
              className="custom-date"
              required
            />
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
