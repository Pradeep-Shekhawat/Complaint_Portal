import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

//Authentication
export const signupUser = (data) => api.post('/auth/signup', data);
export const loginUser = (data) => api.post('/auth/login', data);

// Submiting Complaint
export const submitComplaint = (data, token) =>
    api.post('/complaints', data, {
        headers: { Authorization: `Bearer ${token}`}
    });

// Fetching complaint for Admin
export const fetchComplaint = (token) => 
    api.get('/complaints', {
        headers: { Authorization: `Bearer ${token}`}
    });

// Updating complaint status (Admin only)
export const updateComplaintStatus = (id, status, token) =>
    api.put(`/complaints/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}`}
    });

// Fetching complaint for user
export const fetchComplaintStatus = async (token) => {
    return await api.get("/complaints/status", {
        headers: { Authorization: `Bearer ${token}` },
    });
};