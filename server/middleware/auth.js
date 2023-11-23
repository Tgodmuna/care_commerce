const jwt = require("jsonwebtoken");
const User = require('../Model/RegisterModel');

exports.protect = async(req,res,next)=>{
    let token;
    if(req.headers.authorization.startWith('Bearer')){
        token=req.headers.authorization.split('')[1]
    }
    if(!token){
        return res.status(401).json({
            message: "you are not logged in! please log in to get access"
        });
    }

    const decoded = await jwt.verify(token,process.env.JWT_SECRETE);
    const currentUser = await User.findById(decoded.user_id);
    if(!currentUser){
        return res.status(401).json({message:'the user belonging to this email does not exist'});
    }

    req.user=currentUser;
    next();
}