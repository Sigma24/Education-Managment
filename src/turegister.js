import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './RegisterStudent.css';

export default function TURegistrationForm({ onSwitchView }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}