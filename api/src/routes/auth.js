const express = require('express')
const { signup, signin } = require('../controllers/auth')
const router = express.Router()
const User = require('../models/user')
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth')


router.post('/signin', validateSigninRequest, isRequestValidated, signin)

router.post('/signup', validateSignupRequest, isRequestValidated, signup)

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ msg: req.user })
// })

module.exports = router