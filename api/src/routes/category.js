const express = require('express')
const Category = require('../models/category')
const router = express.Router()
const { addCategory, getCategory } = require('../controllers/category')
const { adminMiddleware, requireSignin } = require('../common-middleware')


const path = require('path')
const shortid = require('shortid')

//Multer
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })


router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImg'), addCategory)
router.get('/category/getcategory', getCategory)

module.exports = router