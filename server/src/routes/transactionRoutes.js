const express = require('express')
const { getTransaction, addTransaction } = require('../controllers/transactionController')

const router = express.Router()

router.get('/', getTransaction)
router.post('/', addTransaction)

module.exports = router
