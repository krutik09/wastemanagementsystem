const jwt=require('jsonwebtoken');
const JWT_SECRET='madebykrutik';
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(500).send("please authecticate");
    }
    try{
        const data=jwt.verify(token,JWT_SECRET);
        req.users=data.users;
        console.log(data.users);
        next();
    }
    catch(error){
        console.log(error.message);
        console.log("error occured in fetch user")
        res.status(500).json({error})
    }
}
module.exports=fetchuser;