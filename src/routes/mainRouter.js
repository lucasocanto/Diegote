
const express = require('express');

const router = express.Router();

const app = express();

const mainController = require('../controllers/mainController')

router.get('/', mainController.index);

router.get('/details', mainController.productDescription);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/shoppingKart', mainController.shoppingKart);

router.get('/edit', mainController.productEdit);

router.get('/create', mainController.productCreate);

//rutas de productos / CRUD de productos 

//Ver todos los productos
router.get('/products', mainController.index);


//crear un producto
router.get('/products/create', mainController.productCreate);
router.post("/products", mainController.store);


//Detalle de un producto particular
router.get('/products/:id', mainController.productDescription);


//Formulario de edición de productos
router.get('/products/:id/edit', mainController.productEdit);
router.put("/products/:id", mainController.update);

//Borrar producto

router.delete("/products/:id", mainController.destroy);

module.exports = router