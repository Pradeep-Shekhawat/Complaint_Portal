import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

//Authentication Form
export const signupUser = (data) => api.post('/auth/signup', data);
export const loginUser = (data) => api.post('/auth/login', data);

//Complaint
export const submitComplaint = (data, token) =>
    api.post('/complaints', data, {
        headers: { Authorization: `Bearer ${token}`}
    });

// Fetching complaint for Admin
export const fetchComplaint = (token) => 
    api.get('/complaints', {
        headers: { Authorization: `Bearer ${token}`}
    });

//Showing complaint status
export const updateComplaintStatus = (id, status, token) =>
    api.put(`/complaints/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}`}
    });

//Fetching complaint for user
export const fetchComplaintStatus = async (token) => {
    return await api.get("/complaints/status", {
        headers: { Authorization: `Bearer ${token}` },
    });
};