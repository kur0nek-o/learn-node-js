const db = require('../models');
const config = require('../config/auth.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = db.user;

module.exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: 'User not found!'
                });
            }

            const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({
                    status: false,
                    message: 'Invalid credential!'
                });
            }

            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            });

            res.status(200).json({
                status: true,
                token
            });
        })
        .catch(err => {
            res.status(500).json({
                status: false,
                message: err.message
            });
        });
}