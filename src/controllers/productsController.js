const fs = require('fs')
const path = require('path')

const jsonPath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

let productsController = {
    index: (req, res) => {
        res.render('index', {products: products});
    },
    productDescription: (req, res) => {
        let productSelected = {}
        products.forEach(product=>{
            if(product.id == req.id) productSelected = product 
        })
        res.render('productDescription', {product: productSelected})
    },
    shoppingKart: (req, res) => {
        res.render('shoppingKart')
    },
    productEdit: (req, res) => {
        let productSelected = {}
        products.forEach(product=>{
            if(product.id == req.id) productSelected = product 
        })
        res.render('productEdit', {product: productSelected})
    },
    productCreate: (req, res) => {
        res.render('productCreate')
    },
    store: (req, res) => {

        let product = req.body
        product.id = products.length + 1
        product.image = req.file? req.file.filename : ''
        products.push(product)
    
        fs.writeFileSync(jsonPath, JSON.stringify(products, null, ''))

        res.redirect('/')
    },
    update: (req, res) => {

        let id = req.params.id

        products.forEach(product=>{
            if(product.id == id){
                let updatedProduct = req.body
                updatedProduct.id = product.id
                updatedProduct.image = req.file? req.file.filename : ''
                product = updatedProduct
            }
        })

        fs.writeFileSync(jsonPath, JSON.stringify(products, null, ""))

        res.redirect('/')
    },
    destroy: (req, res) => {
        let id = req.params.id

        products.forEach(product=>{
            if(product.id == id){
                products.remove(product)
            }
        })

        fs.writeFileSync(jsonPath, JSON.stringify(products, null, ""))

        res.redirect('/')
    },
}

module.exports = productsController