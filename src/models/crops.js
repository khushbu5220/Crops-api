const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");

const cropSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
                }
            }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
});

// create a new collection

const Crop = new mongoose.model('Crop', cropSchema);

module.exports = Crop;