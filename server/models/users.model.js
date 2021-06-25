const mongoose = require('mongoose')
const user_schema = mongoose.Schema({

    username : String,
    
})

const user_model = mongoose.model('users',user_schema);

module.exports= user_model;