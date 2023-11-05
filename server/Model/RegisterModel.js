const mongoose = require('mongoose');

const RegisterModelSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const registerModel =  mongoose.model('signUp',RegisterModelSchema)
module.exports = registerModel