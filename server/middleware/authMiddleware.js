const jwt = require('jsonwebtoken');
const User = require('../module/User');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Access Denied. Invalid token format.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Access Denied. User not found.' });
        }

        req.user = { id: user.id, role: user.role };
        next();
    } catch (err) {
        console.error('JWT Verification Error:', err);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;