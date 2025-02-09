const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   email:{
    type:String,
    required:true,
    trim:true,
   },
   subject:{
    type:String,
    required:true,
    trim:true,
   },
   message:{
    type:String,
    required:true,
    trim:true,
   }
})

module.exports = mongoose.model("User",userSchema);