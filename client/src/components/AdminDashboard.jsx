import React, { useEffect, useState } from "react";
import { fetchComplaint, updateComplaintStatus } from "../service/api";
import collegelogo from "/collegelogo.jpg";
import teamlogo from "/teamlogo.jpeg";

function AdminDashboard() {
    const [complaint, setComplaint] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const token = localStorage.getItem('token');
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
        const token = localStorage.getItem('token');
        await updateComplaintStatus(id, newStatus, token);
        setComplaint(complaint.map((c) =>
        c._id === id ? { ...c, status: newStatus } : c));
    };

    return(
        <div className="admindashboard">
            <div className="header">
                <img src={collegelogo} alt="College Logo" className="collegelogo" />
                <h1 className="heading">Complaint & Suggestion Form</h1>
                <img src={teamlogo} alt="Team Logo" className="teamlogo" />
            </div>
            <div className="dashboard-container">
                <h1>Admin Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Lasr Name</th>
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
                                <td>{complaint.user?.firstname}</td>
                                <td>{complaint.user?.lastname}</td>
                                <td>{complaint.user?.email}</td>
                                <td>{complaint.user?.phone}</td>
                                <td>{complaint.departement}</td>
                                <td>{complaint.suggestion}</td>
                                <td>{complaint.status}</td>
                                <td><select value={complaint.status} onChange={(e) => handleStatusChange(complaint._id, e.target.value)}></select></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;