const fs = require('fs')
const path = require('path')

const jsonPath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

let productsController = {
    index: (req, res) => {
        res.render('index');
    },
    productDescription: (req, res) => {
        res.render('productDescription')
    },
    shoppingKart: (req, res) => {
        res.render('shoppingKart')
    },
    productEdit: (req, res) => {
        res.render('productEdit')
    },
    productCreate: (req, res) => {
        res.render('productCreate')
    },
    store: (req, res) => {
        res.send('Producto Creado') // por el momento envie solo un string como vista
    },
    update: (req, res) => {
        res.send('Producto Editado') // por el momento envie solo un string como vista
    },
    destroy: (req, res) => {
        res.send('Producto Eliminado') // por el momento envie solo un string como vista
    },
}

module.exports = productsController