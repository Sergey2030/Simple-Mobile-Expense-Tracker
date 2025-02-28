const Transaction = require('../models/transactionModel')

exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.getAll()
        res.json(transaction)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.addTransaction = async (req, res) => {
    try {
        const {date, money, category} = req.body
        const transaction = await Transaction.add({date, money, category})

        const transactionAll = await Transaction.getAll()

        res.status(201).json(transactionAll)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}