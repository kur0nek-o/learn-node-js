const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

module.exports.verifyToken = (req, res, next) => {
    let token = req.headers.authorization

    if (!token) {
        return res.status(403).json({
            status: false,
            message: 'No token provided!'
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized',
                err
            })
        }

        next()
    });
}