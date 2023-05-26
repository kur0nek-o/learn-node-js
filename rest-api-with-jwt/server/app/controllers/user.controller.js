const db = require('../models')
const Games = db.games

exports.getAll = async (req, res) => {
    const games = await Games.findAll()

    res.status(200).json({
        status: true,
        data: games
    })
}

exports.find = async (req, res) => {
    const id = req.params.id
    const game = await Games.findAll({
        where: {
            id
        }
    })

    res.status(200).json({
        status: true,
        data: game
    })
}