import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/ThankYou.css';

function ThankYou() {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/complaints');
    };

    return(
        <div className="thankyou-container">
            <h1>Thank You</h1>
            <p>Your complaint or suggestion has been submitted successfully.</p>
            <button onClick={handleReturn}>Submit Another</button>
        </div>
    );
}

export default ThankYou;