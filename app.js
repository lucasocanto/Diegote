const express = require('express');
const app = express();

const path = require('path');

const mainRouter = require('./src/routes/mainRouter.js');

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

app.use(express.static(publicPath))

app.use(express.urlencoded())

app.use('/', [mainRouter, usersRouter, productsRouter])

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 jeje');})


