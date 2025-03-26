import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom";
import './RegisterStudent.css';

export default function SRegistrationForm({ onSwitchView }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userdata = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: formData.age
      
    };
  
    if (formData.password.length !== 8) {
      alert("Password must be exactly 8 characters or confirm password doesn't match.");
      return;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:5000/api/RegisterStudent", {
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
      navigate("/Admin");
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6} xl={5}>
          <div className="registration-box">
            <h2 className="text-center mb-4">Create Account</h2>
            <Form onSubmit={handleSubmit}>
            
              <Form.Group className="mb-3 form-group">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name"
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

              
              <Form.Group className="mb-3 form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

              
              <Form.Group className="mb-3 form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name="password"
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

         
              <Form.Group className="mb-3 form-group">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                  type="number" 
                  name="age"
                  required
                  onChange={handleChange}
                  className="form-input"
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 register-btn"
              >
                Register
              </Button>
            </Form>

            <div className="text-center mt-3">
              
            <Link to="/Admin" className="back-link">Go BACK</Link>
              
            </div>
            {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="check-icon ">✔</span>
            <p style={{color:"black"}}>User Registered Successfully!</p>
          </div>
        </div>
      )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}