import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate()




 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        
        localStorage.setItem('user', JSON.stringify({
          id: data.id,  
          name: data.name,
          role: data.role,
          email:data.email,
          age:data.age,
          date:data.date,
          unique_code:data.unique_code
        }));
  
       
        switch (data.role) {
          case "Admin":
            navigate("/Admin");
            break;
          case "Student":
            navigate("/Student");
            break;
          case "Teacher":
            navigate("/Teacher");
            break;
          case "Tutor":
            navigate("/Tutor");
            break;
          default:
            alert("Unknown role");
        }
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="identifier"
              placeholder="email or unique code"
              value={loginData.identifier}
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