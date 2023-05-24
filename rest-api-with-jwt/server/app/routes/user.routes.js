const { verifyToken } = require('../middleware/auth.jwt');
const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/example', [verifyToken], controller.example);
}