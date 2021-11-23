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
     const errors = validationResult(req)
     if(!errors.isEmpty()) {
        res.render('register', {errors: errors.mapped(), old: req.body}) 
     }else{
        let user = req.body

        for(let i = 0; i < users.lenght; i ++) 
        if(user.mail == users[i].mail){
            //  mandar error 'ya se encuentra registrado'
            res.render('register', {errors: errors.mapped(), old: req.body}) 
        }

        if(user.password == user.repite_password){
            //   mandar error 'no coinciden las pass'
            res.render('register', {errors: errors.mapped(), old: req.body}) 
        }

        let encriptedPass = bcrypt.hashSync(user.password, 10)
        user.repite_password = null
        user.password = encriptedPass

        user.id = Math.random() 
        user.type = 'client' 
        user.image =  "/images/" + (req.file?req.file.filename : '')

        users.push(user)
   
        fs.writeFileSync(jsonPath, JSON.stringify(users,null,''))
        res.redirect('/products')   
     }
    },
}

module.exports = usersController