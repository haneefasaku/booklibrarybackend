const express = require('express')

const { checkLogin } = require('../middleware/checkLogin')
const { login, verifyLogin } = require('../controller/authController')


const router = express.Router()

router.post("/login", login)
router.get("/verify", checkLogin, verifyLogin)

module.exports = router