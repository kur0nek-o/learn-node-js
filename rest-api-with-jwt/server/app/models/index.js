const config = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: config.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db;