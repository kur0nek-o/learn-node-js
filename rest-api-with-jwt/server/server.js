const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const db = require('./app/models');
db.sequelize.sync();

const app = express();
const port = 3000;
const User = db.user;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    res.status(200).json({
        status: true,
        message: 'success'
    });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});