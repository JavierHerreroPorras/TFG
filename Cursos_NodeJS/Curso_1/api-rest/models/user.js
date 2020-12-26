const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//IMPORTANTE: middleware

// Deprecado. Usar en su lugar bcrypt o bcryptjs
const bcrypt = require('bcrypt-nodejs');

//npm -i -S crypto --> Built-in module
const crypto = require('crypto');

// lowercase: guarda los emails en minuscula en la base de datos
// select: Al hacer un GET de los usuarios, que no devuelva la contraseña
// unique: Que los emails sean únicos
const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true},
    displayName: String,
    avatar: String,
    password: {type: String, select: false },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
})

//Funciones antes de que el modelo se guarde en la BBDD
UserSchema.pre('save', (next) => {
    const user = this;
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

UserSchema.methods.gravatar = function(){
    if (!this.email) return `https://gravatar.com/avatar/?s=2005d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=2005d=retro`
}

module.exports = mongoose.model('User', UserSchema);
