import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ComplaintForm from "./components/Complaint";
import ThankYou from "./components/ThankYou";
import AdminDashboard from "./components/AdminDashboard";
import NotFound from "./components/NotFound";
import ComplaintOptions from "./components/ComplaintOption";
import ComplaintStatus from "./components/ComplaintStatus";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/complaints" element={<ComplaintForm />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/complaints-option" element={<ComplaintOptions />} />
      <Route 
        path="/complaints-status" 
        element={<ProtectedRoute><ComplaintStatus /></ProtectedRoute>} 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;