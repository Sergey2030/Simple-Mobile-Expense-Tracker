const express = require('express')
const { getBalance, updateBalance } = require("../controllers/totalBalanceController.js")

const router = express.Router()

router.get("/", getBalance)
router.put("/", updateBalance)

module.exports = router
