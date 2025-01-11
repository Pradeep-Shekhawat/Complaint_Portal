import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from './components/AuthForm';
import ComplaintForm from './components/Complaint';
import ThankYou from './components/ThankYou';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/complaint" element={<ComplaintForm />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;