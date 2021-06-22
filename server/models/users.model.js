const mongoose = require('mongoose')
const user_schema = mongoose.Schema({

    firstName : String,
    lastName : String,
    emailAddress : String,
    dob : String,
    phoneNumber : String,
})

const user_model = mongoose.model('users',user_schema);

module.exports= user_model;