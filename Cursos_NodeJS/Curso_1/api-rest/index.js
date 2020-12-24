/*
body-parser para admitir peticiones con el cuerpo del mensaje en formato JSON. 
Middleware --> Capas que se añaden . Cada vez que se reliza una petición, pasa por las distintas capas

--> Ya no hace falta importar body-parser. A partir de la version 4.16.0 de Express este lo trae incorporado.
*/


// Importamos los modulos/librerias necesarios (se pueden importar de otra manera)
const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Añadimos escuchas o peticiones a la API REST
// 1. Cuando accedemos a localhost:3001/hola, se ejecuta un callback, donde
//     req es la petición y res es la respuesta
// 2. Para acceder a los parametros, podemos utilizar req (request) mediante req.params
//    Además necesitamos especificar los parámetros en la ruta con /:parametro
app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}!` });
})
 
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`)
});