const express = require('express');
const cors = require('cors');

const db = require('./app/models');
db.sequelize.sync();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});