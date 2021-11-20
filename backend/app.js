const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

//import routes
const postRoute = require("./routes/post")

//ROUTES
app.get("/", (req, res) => {
    res.json("Hello from express!")
})

app.use("/posts", postRoute)

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to MongoDB!");
})

//Start listenting
app.listen(3000);