import React, { useEffect, useState } from "react";
import { fetchComplaint, updateComplaintStatus } from "../service/api";
import collegelogo from "/collegelogo.jpg";
import teamlogo from "/teamlogo.jpeg";
import instagram from "/instagram.jpg";
import linkedin from "/linkedin.jpg";
import github from "/github.jpg";
import discord from "/discord.jpg";
import '../styles/AdminDashboard.css';

function AdminDashboard() {
    const [complaint, setComplaint] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const token = sessionStorage.getItem('token');
            try {
                const res = await fetchComplaint(token);
                setComplaint(res.data);
            }
            catch (err) {
                alert('Failed to fetch complaints');
            }
        };
        fetchData();
    });

    const handleStatusChange = async (id, newStatus) => {
        const token = sessionStorage.getItem('token');
        await updateComplaintStatus(id, newStatus, token);
        setComplaint(complaint.map((c) =>
        c._id === id ? { ...c, status: newStatus } : c));
    };

    return(
        <div className="admindashboard">
            <div className="header">
                <img src={collegelogo} alt="College Logo" className="collegelogo" />
                <h1 className="heading">Admin Dashboard</h1>
                <img src={teamlogo} alt="Team Logo" className="teamlogo" />
            </div>
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
                        {complaint.map((complaint) => (
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
                                 onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
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
            <div className="footer">
                <p>© 2025 Bharati Vidyapeeth. All rights reserved.</p>
                <a href="xyz">
                    <img src={instagram} alt="Instragram" />
                </a>
                <a href="www.linkedin.com/in/shekhawatpradeepsingh">
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

export default AdminDashboard;