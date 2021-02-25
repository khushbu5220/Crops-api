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
        const data = await crop.findOne()

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error : error.message})
    }


})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
