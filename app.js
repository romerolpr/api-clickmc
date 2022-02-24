const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use((req, res, next) => { 

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === 'OPTIONS') {
        res.header('Cache-Control', 'public, max-age=86400');
        res.end();
    } else {
        app.use(cors({
            origin: function (origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                  callback(null, true)
                } else {
                  callback(new Error('Not allowed by CORS'))
                }
            },
            maxAge: 86400,
            preflightContinue: true
        }))
        
        next();
    }
})

// importa versão 1 da api
require('./src/routes/app.route.js')(app)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

//500
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            message: error.message,
            status: error.status
        }
    })
});

module.exports = app;