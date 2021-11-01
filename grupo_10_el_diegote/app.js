// Módulos
const express = require('express');
const app = express();

const path = require('path');

const mainRouter = require('./src/routes/mainRouter.js');

app.set ('view engine', 'ejs');

app.set ('views', 'src/views');

app.use(express.static('./public'));

app.use('/', mainRouter)

app.use('/details', mainRouter)

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 jeje');})

