const jwt = require("jsonwebtoken");
const {unauthenticatedError} = require("../errors/");

const authenticationMiddleware = (req , res ,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new unauthenticatedError("No token Found" );
    }
    const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        const {id,username} = decoded;
        req.user = {id,username};
        next();
    }catch(error){
        throw new unauthenticatedError("Not authorized to access ths route");
    }
    console.log(req.headers.authorization);
    
}

module.exports = authenticationMiddleware