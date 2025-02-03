import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../service/api";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Auth.css";
import { jwtDecode } from "jwt-decode";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(formData);
      if (!res.data.token) {
        alert("Authentication Failed");
        return;
      }
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      if (decoded.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/complaints-option");
      }
    } catch (err) {
      alert("Authentication Failed");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await signupUser(formData);
      if (!res.data.token) {
        alert("Sign Up Failed");
        return;
      }
      // Automatically store the token and log the user in.
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      alert("Sign Up Successful");
      navigate('/complaints')
    } catch (err) {
      alert("Sign Up Failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await handleLogin();
      } else {
        await handleSignup();
      }
    } catch (err) {
      alert("Authentication Failed");
    }
  };

  return (
    <div className="auth-page">
      <Header title={isLogin ? "Login" : "Sign Up"} />
      <div className="container">
        <div className="tab">
          <div className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
            Login
          </div>
          <div className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
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
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Auth;