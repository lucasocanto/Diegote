const fs = require('fs')
const path = require('path')

const jsonPath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) 

const  {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

let usersController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    save: (req, res) => { 
     let errors = validationResult(req)

     if(!errors.isEmpty()) {
        res.render('register', {errors: errors.mapped(), old: req.body}) 
     } else {
        let user = req.body
        let pass = bcrypt.hashSync(user.password, 10)
        user.repite_password = null
        user.password = pass
        user.id = users.length + Math.random() 
        user.type = 'client' 
        user.image =  "/images/" + (req.file?req.file.filename : '')
        users.push(user)
   
        fs.writeFileSync(jsonPath, JSON.stringify(users,null,''))
        res.redirect('/products')  
     }
    },
}

module.exports = usersController