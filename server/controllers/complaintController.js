const Complaint = require('../module/Complaint');
const asyncHandler = require('express-async-handler');

// Submit a complaint
exports.submitComplaint = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, phone, department, type, complaint, suggestion } = req.body;

  const newComplaint = await Complaint.create({
    user: req.user.id,
    firstname,
    lastname,
    email,
    phone,
    department,
    type,
    complaint,
    suggestion,
  });

  res.status(201).json({ message: 'Complaint submitted successfully', complaint: newComplaint });
});

// Fetch all complaints (admin only)
exports.fetchComplaint = asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    res.status(403);
    throw new Error('Access Denied');
  }

  const complaints = await Complaint.find().populate('user', 'name email');
  res.status(200).json(complaints);
});

// Update the status of a complaint (admin only)
exports.updateComplaintStatus = asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    res.status(403);
    throw new Error('Access Denied');
  }

  const { status } = req.body;
  const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!updatedComplaint) {
    res.status(404);
    throw new Error('Complaint not found');
  }
  res.status(200).json(updatedComplaint);
});

// Fetch complaints for the logged-in user
exports.fetchComplaintStatus = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id });
  if (!complaints.length) {
    res.status(404);
    throw new Error('No complaints found for this user.');
  }
  res.status(200).json(complaints);
});