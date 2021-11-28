const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.resolve(__dirname,"./public")

const methodOverride = require('method-override')

const productsRouter = require('./src/routes/productsRouter.js')

const usersRouter = require('./src/routes/usersRouter')

// pa requerir session
const session = require ('express-session');

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static(publicPath))

app.use(methodOverride('_method'))

app.use('/', [usersRouter, productsRouter])

app.use(session({secret: 'secreto'}))

app.set('view engine', 'ejs')

app.set('views', [
    path.join(__dirname, './src/views'),
    path.join(__dirname, './src/views/products') ,
    path.join(__dirname, './src/views/users') 
])

app.listen(3000, () => { console.log('Server running...') })