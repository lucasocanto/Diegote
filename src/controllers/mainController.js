
let mainController = {
    index: (req, res) => {
        res.render('index', {products}); //no se si es correcto este objeto aca//
    },
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
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

module.exports = mainController