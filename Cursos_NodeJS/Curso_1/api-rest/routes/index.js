const express = require('express');
const api = express.Router();
const productCtrl = require('../controllers/product');

//Añadimos escuchas o peticiones a la API REST
// 1. Cuando accedemos a localhost:3001/hola, se ejecuta un callback, donde
//     req es la petición y res es la respuesta
// 2. Para acceder a los parametros, podemos utilizar req (request) mediante req.params
//    Además necesitamos especificar los parámetros en la ruta con /:parametro
/*app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}!` });
})*/

// Ruta de tipo GET
api.get('/product', productCtrl.getProducts);
api.get('/product/:productId', productCtrl.getProduct);

// Ruta de tipo POST. La ruta es la misma para GET y POST, pero Express diferencia la consulta por el verbo utilizado en la petición
api.post('/product', productCtrl.saveProduct);

//Ruta de tipo PUT
api.put('/product/:productId', productCtrl.updateProduct);

//Ruta de tipo DELETE
api.delete('/product/:productId', productCtrl.deleteProduct);

module.exports = api;