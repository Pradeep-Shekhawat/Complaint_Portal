import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

//Authentication Form
export const signupUser = (data) => api.post('/auth/signup', data);
export const loginUser = (data) => api.post('/auth/login', data);

//Complaint
export const submitComplaint = (data, token) =>
    api.post('/complaint', data, {
        headers: { Authorization: `Bearer ${token}`}
    });

// Fetching complaint for Admin
export const fetchComplaint = (taken) => 
    api.get('/complain', {
        headers: { Authorization: `Bearer ${token}`}
    });

//Showing complaint status
export const updateComplaintStatus = (id, status, token) =>
    api.put(`/complaint/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}`}
    });