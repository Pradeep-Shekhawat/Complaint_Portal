const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    type: { type: String, required: true },
    complaint: { type: String, required: true },
    suggestion: { type: String },
    status: { type: String, enum: ['Pending', 'Resolved', 'Rejected'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', ComplaintSchema);