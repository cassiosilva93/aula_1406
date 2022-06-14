const express = require('express')
const UsersController = require('../controllers/UsersController')

const router = express.Router()

router.get('/', UsersController.index)

module.exports = router