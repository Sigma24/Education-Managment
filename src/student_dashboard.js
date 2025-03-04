import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { School, Person } from "@mui/icons-material";
import './student.css';
import Academia from "./academia";
import Teacher from "./teacher"; 
import Tutor from "./test";

export default function Admin() {
  const [showStudentScreen, setShowStudentScreen] = useState(false);
  const [showTeacherScreen, setShowTeacherScreen] = useState(false);
  const [show, setShow] = useState(false);

  
  const renderContent = () => {
    if (showStudentScreen) {
      return <Academia />;
    } else if (showTeacherScreen) {
      return <Teacher />;
      }
      else if (show) {
      return <Tutor />;} 
    
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
            <Col md={4} sm={12} className="mb-3">
              <Card className="view-card" onClick={() => setShowStudentScreen(true)}>
                <Card.Body>
                  <h4>View as Student</h4>
                  <School fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="mb-3">
              <Card className="view-card" onClick={() => setShowTeacherScreen(true)}>
                <Card.Body>
                  <h4>View as Teacher</h4>
                  <Person fontSize="large" />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="mb-3">
              <Card className="view-card" onClick={() => setShow(true)}>
                <Card.Body>
                  <h4>View as Tuoter</h4>
                  <Person fontSize="large" />
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
