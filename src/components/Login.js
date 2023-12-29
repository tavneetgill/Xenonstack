import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const containerStyle = {
  background: "linear-gradient(to right, #00c6ff, #0072ff)",
  height: "100vh",
  width:"100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  width: "300px",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  background: "white",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  borderRadius: "4px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  width: "100%",
};

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function submit(e) {
        e.preventDefault();
      
        try {
          const response = await axios.post("http://localhost:8000/", {
            email,
            password,
          });
      
          console.log(response.data); // Log the response to the console
      
          // Add your navigation logic here
          if (response.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (response.data === "notexist") {
            alert("User has not signed up");
          }
        } catch (error) {
          console.error("Error occurred during login:", error); // Log the full error object
          alert("Error occurred during login");
        }
      }
  
    return (
      <div style={containerStyle}>
        <div style={formStyle} className="login">
          <h1 style={{ textAlign: "center", color: "#333" }}>Login</h1>
          <form >
            <input
              style={inputStyle}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              style={inputStyle}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button style={buttonStyle} type="submit" onClick={submit} method="POST">
              Login
            </button>
          </form>
          <br />
          <p style={{ textAlign: "center", color: "#333" }}>OR</p>
          <br />
          <Link style={{ textAlign: "center", display: "block", color: "#333" }} to="/signup">
            Signup Page
          </Link>
        </div>
      </div>
    );
  }
  
  export default Login;