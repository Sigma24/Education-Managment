import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import "bootstrap/dist/css/bootstrap.min.css";
import "./academia.css";
import Grades from "./grades";
import ReferenceCards from "./reference";
import PersonalStatement from "./personal_statment";
import MyProfile from "./profile";

export default function Academia() {
  const [grades, setGrades] = useState(false);
  const [screen, setscreen] = useState(false)
  const [personal, setpersonal] = useState(false)
  const [profile, setprofile] = useState(false)


  if (grades) {
    return <Grades />;
  }
   else if(screen){
   return <ReferenceCards/>
  }
 else if (personal){
    return <PersonalStatement/>
  }
  else if (profile){
    return <MyProfile/>
  }

  return (
    <Container className="text-center academia-container">
      <Typography variant="h4" className="mt-4 academia-title">
        Welcome to <span className="brand">Acadamia360</span>
      </Typography>
      <Typography variant="subtitle1" className="home-page">
        Home Page
      </Typography>
      <div className="role-box">
        <Typography variant="h6">Role: XY</Typography>
        <Typography variant="h6">Name</Typography>
      </div>
      <Row className="mt-4">
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={() => setGrades(true)}>
            <Card.Body>
              <SchoolIcon className="icon" />
              <Card.Title>Predicted Grades</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={()=>setscreen(true)}>
            <Card.Body>
              <AssignmentIcon className="icon" />
              <Card.Title>References</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={()=>setpersonal(true)}>
            <Card.Body>
              <DescriptionIcon className="icon" />
              <Card.Title>Personal Statement</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={()=>setprofile(true)}>
            <Card.Body>
              <PersonIcon className="icon" />
              <Card.Title>My Profile</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}