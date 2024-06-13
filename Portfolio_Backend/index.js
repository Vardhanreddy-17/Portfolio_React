const express = require("express");
const app = express()
const cors = require("cors");

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const connect = require("./config/database")
connect();

const user = require("./routes/route");
app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log("Server Started successfully");
})

app.get("/",(req,res)=>{
    res.send("Portfolio_Backend");
})
