// Importamos los modulos/librerias necesarios (se pueden importar de otra manera)
//const express = require('express');
import express from 'express';
const bodyParser = require('body-parser'); 

const app = express();
const api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;
