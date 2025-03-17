import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const nevigate = useNavigate()




 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{

      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(loginData), 
      });
    const data = await response.json()
    if(response.ok){
       console.log(data);
       nevigate("/Admin")
      }

    
    else{
      alert(data.message|| "email and password")
    }

  }catch(error){
      console.log(`error ${error}`);
    }

   
    
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
          <p className="text-center mt-3">
  Don't have an account? <Link to="/Registration">Sign Up</Link>
</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;