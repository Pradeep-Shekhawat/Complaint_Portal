const express = require('express');
const {
  submitComplaint,
  fetchComplaint,
  updateComplaintStatus,
  fetchComplaintStatus,
} = require('../controllers/complaintController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route for users to submit complaints
router.post('/', authMiddleware, submitComplaint);

// Admin route to fetch all complaints
router.get('/', authMiddleware, fetchComplaint);

// Admin route to update complaint status
router.put('/:id', authMiddleware, updateComplaintStatus);

// Route for a user to fetch their own complaints
router.get('/status', authMiddleware, fetchComplaintStatus);

module.exports = router;