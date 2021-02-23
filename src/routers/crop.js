const express = require("express");
const router = new express.Router();
const Crop = require("../models/crops");


router.post("/crops", async(req,res) => {

    try{
        const user = new Crop(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }

    catch(e){
        res.status(400).send(e);
    } 
})
