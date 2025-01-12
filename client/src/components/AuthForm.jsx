import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../service/api';
import '../styles/Auth&Thank.css';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const res = await loginUser(formData);
                localStorage.setItem('token', res.data.token);
                navigate('/complaints');
            } else {
                await signupUser(formData);
                alert('Sign Up Successful');
                setIsLogin(true);
            }
        } catch (err) {
            alert('Authentication Failed');
        }
    };

    return (
        <div className="container">
            <div className="tab">
                <div
                    className={isLogin ? 'active' : ''}
                    onClick={() => setIsLogin(true)}
                >
                    Login
                </div>
                <div
                    className={!isLogin ? 'active' : ''}
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </div>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
}

export default AuthForm;