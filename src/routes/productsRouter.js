
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/details', productsController.productDescription);

router.get('/shoppingKart', productsController.shoppingKart);

router.get('/edit', productsController.productEdit);

router.get('/create', productsController.productCreate);

//rutas de productos / CRUD de productos 

//crear un producto
router.get('/products/create', productsController.productCreate);
router.post("/products", productsController.store);


//Detalle de un producto particular
router.get('/products/:id', productsController.productDescription);


//Formulario de edición de productos
router.get('/products/:id/edit', productsController.productEdit);
router.put("/products/:id", productsController.update);

//Borrar producto

router.delete("/products/:id", productsController.destroy);

module.exports = router