module.exports.example = (req, res) => {
    res.status(200).json({
        status: true,
        message: 'you won!'
    });
}