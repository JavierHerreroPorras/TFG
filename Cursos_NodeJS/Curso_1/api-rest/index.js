/*
body-parser para admitir peticiones con el cuerpo del mensaje en formato JSON. 
Middleware --> Capas que se añaden . Cada vez que se reliza una petición, pasa por las distintas capas

--> Ya no hace falta importar body-parser. A partir de la version 4.16.0 de Express este lo trae incorporado.
*/


// Importamos los modulos/librerias necesarios (se pueden importar de otra manera)

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, (err,res) => {
  if (err){
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  });
})


