import React, { useEffect, useState } from "react";
import { fetchComplaint, updateComplaintStatus } from "../service/api";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const res = await fetchComplaint(token);
        setComplaints(res.data);
      } catch (err) {
        alert("Failed to fetch complaints");
      }
    };
    fetchData();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const token = sessionStorage.getItem("token");
    await updateComplaintStatus(id, newStatus, token);
    setComplaints(
      complaints.map((c) =>
        c._id === id ? { ...c, status: newStatus } : c
      )
    );
  };

  return (
    <div className="admindashboard">
      <Header title="Admin Dashboard" />
      <div className="dashboard-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Department</th>
              <th>Type</th>
              <th>Complaint</th>
              <th>Suggestion</th>
              <th>Status</th>
              <th>Action</th>
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
                <td>
                  <select
                    value={complaint.status}
                    onChange={(e) =>
                      handleStatusChange(complaint._id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;