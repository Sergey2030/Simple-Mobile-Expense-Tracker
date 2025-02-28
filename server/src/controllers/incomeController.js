const Income = require("../models/incomeModel")

exports.getIncome = async (req, res) => {
    try {
        const exprence = await Income.getAll()
        res.json(exprence)
        console.log(exprence, "434");
        
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
        
    }
}

exports.addCreate = async (req, res) => {
    try {
        const {category, date, money} = req.body
        const exprence = await Income.create(category, date, money)
        res.status(201).json(exprence)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}