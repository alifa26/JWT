const jwt = require("jsonwebtoken");
const {badRequest} = require("../errors");

const login = async (req,res)=>{
   const {username , password} = req.body;
    if(!username || !password){
        throw new badRequest("please provide user name and password");
    }
    const id = 9999;

    const token = jwt.sign({id , username},process.env.JWT_SECRET,{expiresIn:"30d"});
    console.log(username,password );
    res.status(209).json({msg:"user created",
token:token})
}

const dashboard = async(req , res) =>{
    console.log(req.user);
    const luckyNumber =  Math.round(Math.random()*100);
    res.status(200).json({msg:`Hello`,secret:`your lucky number is ${luckyNumber}`});
}

module.exports = {login , dashboard}