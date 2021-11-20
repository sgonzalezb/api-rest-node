const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
require("dotenv/config");
app.use(bodyParser.json());

//import routes
const postRoute = require("./routes/post")

//ROUTES
app.get("/", (req, res) => {
    res.send("Hello world first API Rest with express")
})

app.use("/posts", postRoute)

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to MongoDB!");
})

//Start listenting
app.listen(3000);