const Complaint = require('../module/Complaint');

exports.submitComplaint = async (req, res) => {
    const { firstname, lastname, email, phone, department, type, complaint, suggestion } = req.body;
    try {
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
    } catch (err) {
        res.status(500).json({ message: 'Error submitting complaint', error: err.message });
    }
};

exports.fetchComplaint = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access Denied' });

    try {
        const complaints = await Complaint.find().populate('user', 'name email');
        res.status(200).json(complaints);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching complaints', error: err.message });
    }
};

exports.updateComplaintStatus = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access Denied' });

    const { status } = req.body;
    try {
        const updatedComplaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!updatedComplaint) return res.status(404).json({ message: 'Complaint not found' });
        res.status(200).json(updatedComplaint);
    } catch (err) {
        res.status(500).json({ message: 'Error updating complaint status', error: err.message });
    }
};

exports.fetchComplaintStatus = async (req, res) => {
    try {
        const complaints = await Complaint.find({ user: req.user.id });
        if (!complaints.length) {
            return res.status(404).json({ message: 'No complaints found for this user.' });
        }
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch complaint status.', error: error.message });
    }
};