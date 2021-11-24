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
        res.render('register', {errors: errors.array(), old: req.body}) 
        return
     }else{
        let user = req.body

        for(let i = 0; i < users.length; i ++) 
        if(user.mail == users[i].mail){
            res.render('register', {alreadyRegistered :"El mail " +  user.mail + " ya se encuentra registrado", old: req.body}) 
            return
        }

        if(user.password != user.repite_password){
            res.render('register', {passwordsDontMatch: "No coinciden las contraseñas", old: req.body}) 
            return
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