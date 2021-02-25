const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");



var crops = new mongoose.Schema({
    heading: String,
    description: String
  
  });

var types = new mongoose.Schema({
    variety: String,
    desc: String
});

var pest = new mongoose.Schema({
     name:String,
     control: String
})

const cropSchema = new mongoose.Schema({
    image: String,
    name: String,
    info: [crops],
    var: [types], 
    pesticide: [pest]

});

// create a new collection

const Crop = new mongoose.model('Crop', cropSchema);

module.exports = Crop;




// var data  = new  Crop({
//     name: "Winter crops",
//     info: [
//         {
//             heading: "Maize",
//             description: "Khushbu is fond of it."

//     },{
//             heading: "Wheat",
//             description: "We eat is daily."

//     }]
// })

// data.save(function (err, data) {
//     if (err) return console.log(err.message)
// })