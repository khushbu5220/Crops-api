// nodemon app.js 

const { Router } = require("express");
const express = require("express");
require("./db/conn");
const crop = require("./models/crop");


const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());

// create a new crops 
app.post("/crop", async (req,res) => {
    try{
        const data = await crop.find();

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error : error.message})
    }
})

// read the data 
app.get("/crops", async (req,res) => {
    try{
        const data = await crop.find();

        res.status(200).send({data});

    } catch (error) {
        res.status(500).send({ error : error.message})
    }
})


// get individual data 
app.get("/crops/:name", async (req,res) => {
    try{
        const name = req.params.name;
        const data = await crop.findOne({name});
     
       
               if(!data){
                   return res.status(404).send(e);
               }else{
                   res.status(200).send(data);
               }

    }catch(e){
        res.status(500).send(e);
    }
})




app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
