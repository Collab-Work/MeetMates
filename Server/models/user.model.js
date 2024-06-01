const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
}, {collection:'registerd-users'})

const model = mongoose.model('UserData',User)

module.exports = model