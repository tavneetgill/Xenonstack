// Contact.js
import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Import your CSS file
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/contact", {
        email,
        message,
      });

      alert("Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (

    <div>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
        <Link style={{ textAlign: "center", display: "block", color: "#333" }} to="/home">
            Home Page
          </Link>
      </form>
    </div>
    </div>
  );
}

export default Contact;
