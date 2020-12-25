const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos el modelo de datos para el producto. Importante: Los datos por defecto y las enumeraciones de tipos (INVESTIGAR)
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0},
    category: { type: String, enum: ['computers', 'phones', 'accesories']},
    description: String
})

// Exportamos el modelo creado
module.exports = mongoose.model('Product', ProductSchema);