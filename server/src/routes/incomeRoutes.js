const express = require('express')
const { getIncome, addCreate } = require("../controllers/incomeController")

const router = express.Router()

router.get('/', getIncome)
router.post('/', addCreate)

module.exports = router