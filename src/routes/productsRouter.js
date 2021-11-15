
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, join(__dirname, '../public/images'))
    },
    filename: (req,file,cb) => {
        const name = file.filename + 'product-' + Date.now + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({storage: storage})

router.get('/', productsController.index);

router.get('/details', productsController.productDescription);

router.get('/shoppingKart', productsController.shoppingKart);

router.get('/edit', productsController.productEdit);

router.get('/create', productsController.productCreate);

//crear un producto
router.post('/products/create', upload.single('file'), productsController.store);

//Formulario de edición de productos
router.put("/products/:id/edit", upload.single('file'), productsController.update);

//Borrar producto
router.delete("/products/:id", productsController.destroy);

module.exports = router