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
        navigate("/complaints"); // Navigate to File Complaint page
    };

    return (
        <div className="options-page">
            <div className="header">
                <img src={collegelogo} alt="College Logo" className="collegelogo" />
                <h1>Welcome</h1>
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
        </div>
    );
}

export default ComplaintOptions;