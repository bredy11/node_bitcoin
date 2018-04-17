const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();
const router = express.Router();
const poll = require('./processo_batch/processarBatch');
const indexRoute = require('./routes/index-route');
const ordemRouter = require('./routes/ordem-router');
const usuarioRoute = require('./routes/usuario-route');

app.use(bodyParser.json({
    limit: '5mb'
}));



app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/usuario', usuarioRoute);
app.use('/ordem', ordemRouter);
module.exports = app;
