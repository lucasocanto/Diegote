const express = require('express');
const app = express();

const path = require('path');

const productsRouter = require('./src/routes/productsRouter.js');

const usersRouter = require('./src/routes/usersRouter.js');

app.set ('view engine', 'ejs');

app.set('views',[
    path.join(__dirname, 'src/views'),
    path.join(__dirname, 'src/views/products') ,
    path.join(__dirname, 'src/views/users') 
 ]
  )

const publicPath = path.resolve(__dirname,"./public")

const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.static(publicPath))

app.use(express.urlencoded())

app.use('/', [usersRouter, productsRouter])

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 jeje');})


