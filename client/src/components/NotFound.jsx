import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="content">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
}

export default NotFound;