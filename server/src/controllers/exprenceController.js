const Experience = require("../models/exprenceModel")


exports.getExprence = async (req, res) => {
    try {
        const exprence = await Experience.getAll()
        res.json(exprence)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.addCreate = async (req, res) => {
    try {
        const {category, date, money} = req.body
        const exprence = await Experience.create(category, date, money)
        const reqExprence = await Experience.getAll()
        res.status(201).json(reqExprence)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}