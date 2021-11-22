const express = require('express')
const router = express.Router()

const path = require('path')

const productsController = require('../controllers/productsController')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
       cb(null, path.join(__dirname,'../../public/images'))
    },
    filename: (req,file,cb) => {
        const name = Math.random() + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({storage: storage})

router.get('/', productsController.index)

router.get('/products', productsController.index)

router.get('/products/:id', productsController.description)

router.get('/products/:id/edit', productsController.edit)

router.get('/create', productsController.create)

router.post('/products', upload.single('image'),productsController.store)

router.put('/products/:id', upload.single('image'), productsController.update)

router.delete('/products/:id', productsController.delete)

module.exports = router