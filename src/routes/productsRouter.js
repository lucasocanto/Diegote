
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

//una de las rutas de los products
router.get('/products',productsController.index);

router.get('/products/:id', productsController.productDescription);

router.get('/shoppingKart', productsController.shoppingKart);

router.get('/products/:id/edit', productsController.productEdit);

//ruta de crear producto "GET"
router.get('/products/create', productsController.productCreate);


// //crea pruduct
// router.get('/products/create', productsController.create)


//crear un producto "POST"
router.post('/products', upload.single('file'), productsController.store);

//Formulario de edición de productos
router.put("/products/:id", upload.single('file'), productsController.update);

//Borrar producto
router.delete("/products/:id", productsController.destroy);

module.exports = router