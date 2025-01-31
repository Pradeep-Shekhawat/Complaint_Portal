import jwtDecode from 'jwt-decode';

export const isAdmin = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const decoded = jwtDecode(token);
    return decoded.role === 'admin';
};