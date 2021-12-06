const model = require('../models/User')

const bcryptjs = require('bcryptjs')

const  {validationResult} = require('express-validator')

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

        if(model.findByField("mail", req.body.mail) != undefined){
            res.render('register', {alreadyRegistered :"El mail " +  user.mail + " ya se encuentra registrado", old: req.body}) 
            return
        }

        if(user.password != user.repite_password){
            res.render('register', {passwordsDontMatch: "No coinciden las contraseñas", old: req.body}) 
            return
        }

        //pa la cookie 
        if(req.body.recordame != undefined) {
            res.cookie('recordame', usuarioALoguearse.email, {maxAge:90000})
        }

        user.image =  "/images/" + (req.file?req.file.filename : '')
        model.create(user)

        res.redirect('/login')   
     }
    },
    auth: (req, res) => {
        let user = model.findByField('mail', req.body.mail)
        let checkPass = bcryptjs.compareSync(req.body.password, user.password)
        if(user != undefined && checkPass){
         res.redirect('/')
        }
        else{
           res.render('login') 
        } 
    }
}


module.exports = usersController