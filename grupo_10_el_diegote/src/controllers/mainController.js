// Acá nos falta nuestra fuente de datos

// const recipes = require('../data/recipes.json')

// Acá nos falta un objeto literal con las acciones para cada ruta

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
    }
}

module.exports = mainController