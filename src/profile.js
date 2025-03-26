import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import { useEffect,useState } from "react";

export default function MyProfile() {
  const [name,setname]=useState("")

  const [email,setemail]=useState("")
  const [age,setage]=useState("")
  const [date,setdate]=useState("")
  const [reg,setreg]=useState("")

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        if (!user.id) {
          console.error("StudentID ID missing in user data");
        } else {
          setname(user.name)
          setage(user.age)
          setemail(user.email)
          setdate(user.date)
          setreg(user.unique_code)
          

}}})


  return (
    <div className="container-fluid">
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Profile</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Predicted Grades</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Reference</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="profile-header text-center">
        <h2>Name: {name}</h2>
        
        
      </div>


        <div className="col-md-4">
          <div className="info-card">
            <h5>Personal Details</h5>
            <p><strong>Reg no:</strong> {reg}</p>
            <p><strong>Registration Date: </strong> {date}</p>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>Age:</strong>{age}</p>
    
          </div>
        </div>
      </div>
  
  );
}
