const mongoose = require('mongoose');

const RegisterModelSchema = mongoose.Schema({
    fullName:String,
    Email:String,
    UserName:String,
    password: String,
    country: String,
    occupation:String,
    Marital_status: String
    
})

const registerModel =  mongoose.model('signUp',RegisterModelSchema)
module.exports = registerModel