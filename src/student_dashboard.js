import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { School, Person, AddCircle } from "@mui/icons-material";
import './student.css';
import Academia from "./academia";
import Teacher from "./teacher"; 
import Tutor from "./test";
import SRegistrationForm from "./RegisterStudent";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [showStudentScreen, setShowStudentScreen] = useState(false);
  const [showTeacherScreen, setShowTeacherScreen] = useState(false);
 
  const [show, setShow] = useState(false);

  const navigate = useNavigate()
  function goaway(){
    navigate("/Sregister")
   
  }
  function goaways(){
    navigate("/Tregister")
   
  }  

  function goawayss(){
    navigate("/Turegister")
   
  }  

  const renderContent = () => {
    if (showStudentScreen) {
      return <Academia />;
    } else if (showTeacherScreen) {
      return <Teacher />;
    } else if (show) {
      return <Tutor />;
    }
    
    else {
      return (
        <>
          <h2 className="text-center mt-3">Welcome to Academia360</h2>
          <p className="text-center">Home Page</p>

          <div className="role-box">
            <p>Role: XY</p>
            <p>Name</p>
          </div>

          <Row className="justify-content-center mt-4">
        
            <Col md={3} sm={6} className="mb-3">
              <Card className="view-card student" onClick={() => setShowStudentScreen(true)}>
                <Card.Body>
                  <h5>View as Student</h5>
                  <School fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

         
            <Col md={3} sm={6} className="mb-3">
              <Card className="view-card teacher" onClick={() => setShowTeacherScreen(true)}>
                <Card.Body>
                  <h5>View as Teacher</h5>
                  <Person fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

          
            <Col md={3} sm={6} className="mb-3">
              <Card className="view-card tutor" onClick={() => setShow(true)}>
                <Card.Body>
                  <h5>View as Tutor</h5>
                  <Person fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

          
            <Col md={3} sm={6} className="mb-3">
              <Card className="view-card add-student" onClick={goaway}>
                <Card.Body>
                  <h5>Add Student</h5>
                  <AddCircle fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

          
            <Col md={3} sm={6} className="mb-3">
              <Card className="view-card add-teacher" onClick={goaways}>
                <Card.Body>
                  <h5>Add Teacher</h5>
                  <AddCircle fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

          
            <Col md={3} sm={6} className="mb-3">
              <Card className="view-card add-tutor" onClick={goawayss}>
                <Card.Body>
                  <h5>Add Tutor</h5>
                  <AddCircle fontSize="large" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      );
    }
  };

  return (
    <Container fluid className="home-container">
      {renderContent()}
    </Container>
  );
}
