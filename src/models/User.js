const fs = require('fs')

const bcrypt = require('bcryptjs')

const User = {

    fileName: '../data/users.json',

    getData : function() {
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'))
    },

    findAll: function(){
        return this.getData()
    },

    findByPk: function(id){
        let users = this.findAll()
        let user  = users.find(user => user.id == id)
        return user
    },
 
    findByField: function(field, value){
        let users = this.findAll()
        let user  = users.find(user => user[field] == value)
        return user
    },

    create: function(userData){
        let users = this.findAll()
        let newUser =  {
            id: this.generateID,
            ...userData
        }
        this.encryptPass(newUser)
        users.push(newUser)
        fs.writeFileSync(this.fileName,JSON.stringify(users,null,' '))
        return newUser
    },

    generateID: function(){
        return Math.random() 
    },

    encryptPass: function(user){
        let encriptedPass = bcrypt.hashSync(user.password, 10)
        user.repite_password = null
        user.password = encriptedPass
    },

    delete: function(id){
        let users = this.findAll()
        let filteredUsers = users.filter(user => user.id != id)
        fs.writeFileSync(this.fileName,JSON.stringify(filteredUsers,null,' '))
        return true
    },
}

module.exports = User