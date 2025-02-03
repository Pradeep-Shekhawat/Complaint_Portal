import React, { useState, useEffect } from "react";
import { fetchComplaintStatus } from "../service/api";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/ComplaintStatus.css";

const ComplaintStatus = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const res = await fetchComplaintStatus(token);
        setComplaints(res.data);
        setLoading(false);
      } catch (err) {
        setError(
          `Failed to fetch complaints: ${
            err.response?.data?.message || err.message
          }`
        );
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="status-page">
      <Header title="Complaint Status" />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Type</th>
              <th>Complaint</th>
              <th>Suggestion</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint._id}>
                <td>{complaint.firstname}</td>
                <td>{complaint.lastname}</td>
                <td>{complaint.email}</td>
                <td>{complaint.phone}</td>
                <td>{complaint.department}</td>
                <td>{complaint.type}</td>
                <td>{complaint.complaint}</td>
                <td>{complaint.suggestion}</td>
                <td>{complaint.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ComplaintStatus;