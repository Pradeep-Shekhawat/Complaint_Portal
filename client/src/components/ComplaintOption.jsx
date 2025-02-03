import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/ComplaintOption.css";

function ComplaintOptions() {
  const navigate = useNavigate();

  const handleViewStatus = () => {
    navigate("/complaints-status");
  };

  const handleFileComplaint = () => {
    navigate("/complaints");
  };

  return (
    <div className="options-page">
      <Header title="Complaint Options" />
      <div className="options-container">
        <h2>What would you like to do?</h2>
        <button onClick={handleViewStatus} className="button">
          View Complaint Status
        </button>
        <button onClick={handleFileComplaint} className="button">
          File a New Complaint
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ComplaintOptions;