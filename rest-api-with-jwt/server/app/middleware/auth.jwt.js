const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');;
const db = require('../models');

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).json({
            status: false,
            message: 'No token provided!'
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized'
            });
        }

        next();
    });
}