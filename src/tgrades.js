import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tgrades.css";

const Tgrades = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [teacherId, setTeacherId] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'Teacher') {
      if (!user.id) {
        console.error("Teacher ID missing in user data");
      } else {
        setTeacherId(user.id);
      }
    }
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      fetch("http://127.0.0.1:5000/api/getStudents")
        .then((response) => response.json())
        .then((data) => setStudents(data))
        .catch((error) => console.log(`error fetching data ${error}`));
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      fetch("http://127.0.0.1:5000/api/getSubjects")
        .then((response) => response.json())
        .then((data) => setSubjects(data))
        .catch((error) => console.log(`error fetching data ${error}`));
    };
    fetchSubjects();
  }, []);

  const handleGradeSubmit = async () => {
    if (!selectedStudent || !selectedSubject || !selectedGrade) {
      setMessage({ type: 'danger', text: 'Please select student, subject, and grade' });
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api/Grades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tID: teacherId,
          sID: selectedStudent.id,
          suID: String(selectedSubject.id),
          grades: selectedGrade
        }),
      });

      const textResponse = await response.text();
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch {
        throw new Error('Invalid JSON response');
      }

      if (response.ok) {
        setMessage({ type: 'success', text: 'Grade saved successfully!' });
        setSelectedStudent(null);
        setSelectedSubject(null);
        setSelectedGrade(null);
      } else {
        setMessage({ type: 'danger', text: data.message || `Error: ${response.status}` });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'danger', text: 'Failed to save grade. Check console for details.' });
    }
  };

  return (
    <>
     
     <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <span className="navbar-brand">Predicted Grades</span>
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">References</a>
            <a className="nav-link" href="#">Personal Statement</a>
            <a className="nav-link" href="#">My Profile</a>
          </div>
        </div>
      </nav>

     
      <Container className="grades-container">
        {message.text && (
          <Alert variant={message.type} onClose={() => setMessage({ type: '', text: '' })} dismissible>
            {message.text}
          </Alert>
        )}

        <Row className="g-4">
       
          <Col md={4}>
            <div className="card">
              <h5>View Your Students</h5>
              <Form.Control type="text" placeholder="Search students..." className="mb-3" />
              <div className="students-box">
                {students.map((student) => (
                  <p
                    key={student.id}
                    className={`student-name ${selectedStudent?.id === student.id ? 'selected' : ''}`}
                    onClick={() => setSelectedStudent(student)}
                  >
                    {student.name}
                  </p>
                ))}
              </div>
            </div>
          </Col>

        
          <Col md={8}>
            <div className="card">
              <h5>Add/Edit Predicted Grades</h5>
              <div className="selected-info mb-3">
                <h6>Selected Student: {selectedStudent?.name || 'None'}</h6>
                <h6>Selected Subject: {selectedSubject?.name || 'None'}</h6>
                <h6>Selected Grade: {selectedGrade || 'None'}</h6>
              </div>

              <Row>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Search subjects..." className="mb-3" />
                  <div className="subjects-box">
                    {subjects.map((subject) => (
                      <p
                        key={subject.id}
                        className={`subject-name ${selectedSubject?.id === subject.id ? 'selected' : ''}`}
                        onClick={() => setSelectedSubject(subject)}
                      >
                        {subject.name}
                      </p>
                    ))}
                  </div>
                </Col>
                <Col md={6}>
                  <Button
                    className="edit-grades-btn"
                    onClick={handleGradeSubmit}
                    disabled={!selectedStudent || !selectedSubject || !selectedGrade}
                  >
                    Save Predicted Grade
                  </Button>
                  <div className="grades-box">
                    {["A*", "A", "B", "C", "D", "E", "U"].map((grade) => (
                      <p
                        key={grade}
                        className={`grade ${selectedGrade === grade ? 'selected' : ''}`}
                        onClick={() => setSelectedGrade(grade)}
                      >
                        {grade}
                      </p>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
);
};

export default Tgrades;