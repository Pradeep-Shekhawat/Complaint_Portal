import React from "react";
import { useNavigate } from "react-router-dom";
import collegelogo from "/collegelogo.jpg";
import '../styles/ComplaintOption.css';

function ComplaintOptions() {
    const navigate = useNavigate();

    const handleViewStatus = () => {
        navigate("/complaints-status"); // Navigate to Complaint Status page
    };

    const handleFileComplaint = () => {
        navigate("/complaints"); // Navigate to Complaint page
    };

    return (
        <div className="options-page">
           <div className="header">
                <img src={collegelogo} alt="College Logo" className="collegelogo" />
                <h1 className="heading">Admin Dashboard</h1>
                <img src={teamlogo} alt="Team Logo" className="teamlogo" />
            </div>
            <div className="options-container">
                <h2>What would you like to do?</h2>
                <button onClick={handleViewStatus} className="button">
                    View Complaint Status
                </button>
                <button onClick={handleFileComplaint} className="button">
                    File a New Complaint
                </button>
            </div>
            <div className="footer">
                <p>© 2025 Bharati Vidyapeeth. All rights reserved.</p>
                <a href="xyz">
                <img src={instagram} alt="Instragram" />
                </a>
                <a href="https://www.linkedin.com/in/shekhawatpradeepsingh" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Pradeep-Shekhawat/Complaint_Portal/tree/main" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
                </a>
                <a href="xyz">
                <img src={discord} alt="Discord" />
                </a>
            </div>
        </div>
    );
}

export default ComplaintOptions;