const express = require('express')
const { getExprence, addCreate } = require("../controllers/exprenceController")

const router = express.Router()

router.get('/', getExprence)
router.post('/', addCreate)

module.exports = router