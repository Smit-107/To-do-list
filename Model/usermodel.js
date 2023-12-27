var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    task:{
        type:String
    },
    status:{
        type:String
    }
});

var usermodel = mongoose.model("user",userschema)
module.exports = usermodel;