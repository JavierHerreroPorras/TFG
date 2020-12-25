/*
body-parser para admitir peticiones con el cuerpo del mensaje en formato JSON. 
Middleware --> Capas que se añaden . Cada vez que se reliza una petición, pasa por las distintas capas

--> Ya no hace falta importar body-parser. A partir de la version 4.16.0 de Express este lo trae incorporado.
*/


// Importamos los modulos/librerias necesarios (se pueden importar de otra manera)
const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

// Importamos el modelo de datos del producto creado con mongoose
const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Añadimos escuchas o peticiones a la API REST
// 1. Cuando accedemos a localhost:3001/hola, se ejecuta un callback, donde
//     req es la petición y res es la respuesta
// 2. Para acceder a los parametros, podemos utilizar req (request) mediante req.params
//    Además necesitamos especificar los parámetros en la ruta con /:parametro
/*app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}!` });
})*/

// Ruta de tipo GET
app.get('/api/product', (req, res) => {
  res.send(200, {products: []})
});

app.get('/api/product/:productId', (req, res) => {

});

// Ruta de tipo POST. La ruta es la misma para GET y POST, pero Express diferencia la consulta por el verbo utilizado en la petición
app.post('/api/product', (req, res) => {

  console.log('POST /api/product');
  console.log(req.body);

  // Creamos una instancia del producto
  let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
  
    product.save((err, productStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `});

      res.status(200).send({product: productStored});
    })});

//Ruta de tipo PUT
app.put('/api/product/:productId', (req,res) => {

});

app.delete('/api/product/:productId', (req, res) => {

});
 

mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true }, (err,res) => {
  if (err){
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
  });
})

// ---> Fundamentos teóricos <---

// GET se utiliza para pedir datos al servidor, y este responde con los datos que necesite
// POST se utiliza para mandar datos al servidor (Los datos viajan en el cuerpo de la petición)--> Mejor mandarlos en JSON
// DELETE petición desde el cliente para borrar un recurso de la base de datos
// PUT actualización de un recurso: Cambiar el nombre, precio, etc.

// Codigos de respuesta:
//    2xx --> Respuesta correcta
//    3xx --> Redirección
//    4xx --> No existen recursos en el servidor (404), 403 es acceso restringido. 
//    5xx --> Error en el servidor

// Cabecera o Header --> Para la mayoría de peticiones

// Objeto guardado: 5fe5c6d6681b6d27b1a53fce

