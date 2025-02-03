import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitComplaint } from "../service/api";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Complaint.css";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    department: "",
    type: "",
    complaint: "",
    suggestion: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    try {
      await submitComplaint(formData, token);
      navigate("/thankyou");
    } catch (err) {
      alert("Submission Failed");
    }
  };

  return (
    <div className="complaint-form">
      <Header title="Complaint & Suggestion Form" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="telephone"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <select name="department" onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="bba">BBA</option>
            <option value="bca">BCA</option>
            <option value="mba">MBA</option>
          </select>
          <select name="type" onChange={handleChange} required>
            <option value="">Select Complaint Type</option>
            <option value="service">Service</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
            <option value="management">Management</option>
            <option value="environment">Environment</option>
          </select>
          <textarea
            name="complaint"
            placeholder="Describe your complaint"
            onChange={handleChange}
            required
          ></textarea>
          <textarea
            name="suggestion"
            placeholder="Give Suggestion"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ComplaintForm;