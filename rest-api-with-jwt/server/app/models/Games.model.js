module.exports = (sequelize, Sequelize) => {
    const Games = sequelize.define('games', {
        cover: {
            type: Sequelize.STRING
        },
        game_name: {
            type: Sequelize.STRING
        },
        about: {
            type: Sequelize.TEXT
        },
        developers: {
            type: Sequelize.STRING
        },
        publishers: {
            type: Sequelize.STRING
        },
        platforms: {
            type: Sequelize.STRING
        },
        genres: {
            type: Sequelize.STRING
        },
        modes: {
            type: Sequelize.STRING
        },
        release: {
            type: Sequelize.DATE
        },
    });

    return Games;
};