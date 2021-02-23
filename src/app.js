const { Router } = require("express");
const express = require("express");
require("./db/conn");
const Crop = require("./models/crops");
const cropRouter = require("./routers/crop");


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(cropRouter);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})