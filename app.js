const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors('*'))

// importa versão 1 da api
require('./src/routes/app.route.js')(app)

module.exports = app;