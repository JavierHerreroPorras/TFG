// Importamos el modelo de datos del producto creado con mongoose
const Product = require('../models/product');


function getProduct(req, res){
    const productId = req.params.productId;

    Product.findById(productId, (err, product) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
      if(!product) return res.status(404).send({message: `El producto no existe`});
  
      res.status(200).send({ product });
    });
}

function getProducts(req, res){
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!products) return res.status(404).send({message: `No existen productos`});

        res.status(200).send({products});
        });
}

function saveProduct(req, res){

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
    });
}

function updateProduct(id){

  const productId = req.params.productId;
  const update = req.body;

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`});
    
    res.status(200).send({ product: productUpdated });
  });

}

function deleteProduct(id){

    const productId = req.params.productId;

    Product.findById(productId, (err, product) => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`});
    
      product.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`});
        res.status(200).send({ message: 'El producto ha sido eliminado' });
      })
    });
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct,
}

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
