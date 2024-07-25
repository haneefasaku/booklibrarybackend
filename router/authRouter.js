const express = require('express')
const { login, verifyLogin } = require('../Controller/authController')
const { checkLogin } = require('../middleware/checkLogin')

const router = express.Router()

router.post("/login", login)
router.get("/verify", checkLogin, verifyLogin)

module.exports = router