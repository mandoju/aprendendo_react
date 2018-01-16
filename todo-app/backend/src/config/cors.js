module.exports = function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET , POST, OPTIONS, PUT , PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'OriginX-requested-With Content-Type Accept')
    next()
}