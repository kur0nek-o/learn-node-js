module.exports = (Sequelize, Sequelize) => {
    const User = Sequelize.define('users', {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return User;
};