const express = require('express');
const { submitComplaint, fetchComplaint, updateComplaintStatus, fetchComplaintStatus } = require('../controllers/complaintController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/', authMiddleware, submitComplaint);
router.get('/', authMiddleware, fetchComplaint);
router.put('/:id', authMiddleware, updateComplaintStatus);

// Route to fetch user complaints
router.get('/status', authMiddleware, fetchComplaintStatus);

module.exports = router;