const mongoose = require("mongoose");

const speechSchema = mongoose.Schema({
    speech:String,
    date:String
},{versionKey:false})

const SpeechModal = mongoose.model("EKSAQ",speechSchema);


module.exports ={SpeechModal}