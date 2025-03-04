import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import "bootstrap/dist/css/bootstrap.min.css";
import "./teacher.css";
import Working from './working';
import Tgrades from './tgrades';

import TeacherProfile from './Teacherprofile';
import { useState } from 'react';
const Teacher = () => {
  const [profile,setprofile]=useState(false)
  const [ref,setref]=useState(false)
  const [grade,setgrade]=useState(false)
  if (profile){
    return <TeacherProfile/>
  }
  else if(ref){
    return <Working/>
  }

  else if(grade){
    return <Tgrades/>
  }
    return (
        <Container className="text-center academia-container">
      <Typography variant="h4" className="mt-4 academia-title">
        Welcome to <span className="brand">Acadamia360</span>
      </Typography>
      <Typography variant="subtitle1" className="home-page">Home Page</Typography>
      <div className="role-box">
        <Typography variant="h6">Role: XY</Typography>
        <Typography variant="h6">Name</Typography>
      </div>
      <Row className="mt-4">
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={()=>setgrade(true)}>
            <Card.Body>
              <SchoolIcon className="icon" />
              <Card.Title>Predicted Grades</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card" onClick={()=>setref(true)}>
            <Card.Body>
              <AssignmentIcon className="icon" />
              <Card.Title>References</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} sm={6} xs={12} className="mb-3">
          <Card className="option-card"  onClick={()=>setprofile(true)}>
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

export default Teacher;
