const fs = require('fs')
const path = require('path')

const jsonPath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) 

let usersController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    save: (req, res) => {      // falta encriptar la pass
        let user = req.body
        user.id = users.length 
        user.image =  "/images/" + (req.file?req.file.filename : '')
        users.push(user)

        fs.writeFileSync(jsonPath, JSON.stringify(users,null,''))
        res.redirect('/products')
    },
}

module.exports = usersController