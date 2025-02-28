const express = require('express')
const { getCategory, addCreate} = require("../controllers/categoryController")

const router = express.Router()

router.get('/', getCategory)
router.post('/', addCreate)

module.exports = router
