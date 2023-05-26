const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./app/models');

db.sequelize.sync();

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});