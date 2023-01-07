const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    gender: String,
    name: String,
    location: String,
    email: String,
    login: String,
    dob: String,
    registered: String,
    phone: String,
    picture: String,

})

const UserModel = mongoose.model("usersDetails", userSchema) 

module.exports = {UserModel}