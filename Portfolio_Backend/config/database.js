const mongoose = require("mongoose");

require('dotenv').config();

const connect = ()=> {mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("connection with db successful")})
.catch((err)=>{
    console.log("Error with connection");
    console.error(err);
    processExit(1);
});
}

module.exports = connect;