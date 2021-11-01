
let mainController = {
    index: (req, res) => {
        res.render('index')
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
    }
}

module.exports = mainController