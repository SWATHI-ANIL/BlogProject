const express = require('express')
const router = express.Router()
const doSignUp = require('../controller/userController')


router.get('/', doSignUp)





module.exports = router