// nodemon app.js 

const express = require('express')
const app = express();


const { Router } = require("express");
const cropRouter = require("./routers/crop");

app.use(express.json());
app.use(cropRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
