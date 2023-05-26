const config = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    pool: config.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model')(sequelize, Sequelize);
db.games = require('./Games.model')(sequelize, Sequelize);

module.exports = db;