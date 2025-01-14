import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitComplaint } from "../service/api";
import collegelogo from "/collegelogo.jpg";
import teamlogo from "/teamlogo.jpeg";
import '../styles/Complaint&Admin.css';
import React from "react";
import discord from "/discord.jpg";
import github from "/github.jpg";
import instagram from "/instagram.jpg";
import linkedin from "/linkedin.jpg";

function ComplaintForm() {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', department: '', type: '', complaint: '', suggestion: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await submitComplaint(formData, token);
            navigate('/thankyou');
        }
        //Error
        catch(err) {
            alert('Submission Failed');
        }
    };

    return (
        <div className="form">
            <div className="header">
                <img src={collegelogo} alt="College Logo" className="collegelogo" />
                <h1 className="heading">Complaint & Suggestion Form</h1>
                <img src={teamlogo} alt="Team Logo" className="teamlogo" />
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
                    <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="telephone" name="phone" placeholder="Phone Number" onChange={handleChange} required />
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
                    <textarea name="complaint" placeholder="Describe your complaint" onChange={handleChange} required ></textarea>
                    <textarea name="suggestion" placeholder="Give Suggestion" onChange={handleChange} ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="footer">
                <p>© 2025 Bharati Vidyapeeth. All rights reserved.</p>
                <a href="xyz">
                    <img src={instagram} alt="Instragram" />
                </a>
                <a href="xyz">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="xyz">
                    <img src={github} alt="GitHub" />
                </a>
                <a href="xyz">
                    <img src={discord} alt="Discord" />
                </a>
            </div>
        </div>
    );
}

export default ComplaintForm;