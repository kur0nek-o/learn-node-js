const db = require('../models')

const Games = db.games

module.exports.example = async (req, res) => {
    const games = await Games.findAll()

    res.status(200).json({
        status: true,
        message: 'you won!',
        games
    })
}