const User = require("../model/model");

require("dotenv").config();

exports.send = async (req,res) => {
    try{
        const{name,email,subject,message} = req.body;
        const user = await User.create({
            name,email,subject,message
        })
        console.log(user);
        res.status(200).json({
            success:true,
            message:"Saved successfully",
        });
    }catch(e){
        res.status(500).json({
            succes:false,
            message:error.message,
        })
    }
}