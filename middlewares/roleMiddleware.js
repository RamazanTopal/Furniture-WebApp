const User=require('../models/User');
module.exports=()=>{

return (req,res,next)=>{
    User.findById(req.session.userID,(err,user)=>{
        if(user.role=="admin"){
            next();
        }
        else{
            res.redirect("/user/login");
        }
    })
}
}
