const mongoose = require('mongoose')

const message_schema = mongoose.Schema({
    msg : String,
    username : String,
    
})

const message_model = mongoose.model('message_details',message_schema);

module.exports= message_model;