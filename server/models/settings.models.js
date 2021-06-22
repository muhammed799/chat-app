const mongoose = require('mongoose')
const setting_schema = mongoose.Schema({

    firstName : String,
    lastName : String,
    emailAddress : String,
    dob : String,
    phoneNumber : String,
})

const setting_model = mongoose.model('settings',setting_schema);

module.exports= setting_model;