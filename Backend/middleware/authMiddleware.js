const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token verified:', decoded);
        req.user = decoded; // now req.user.userId is available
        next();
    } catch (err) {
        return res.status(403).send('Invalid or expired token');
    }
};

module.exports = verifyToken;
