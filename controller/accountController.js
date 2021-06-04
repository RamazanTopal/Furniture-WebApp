const User=require('../models/User')
const bcrypt=require('bcrypt');
//register
exports.getRegister=async (req, res)=>{
    try{
        
        res.render("register",{
            page_name:"register"
        })

    }catch(error){

    }
}
exports.postRegister=async (req, res)=>{
    try{
        const user= await User.create(req.body)
        res.render("register",{
            page_name:"index",
            user:user
        })

    }catch(error){
     
    }
}

//login
exports.getLogin=async (req, res)=>{
    try{
        
        res.render("login",{
            page_name:"login"
        })

    }catch(error){

    }
}
exports.postLogin=async (req, res)=>{
    try{
        const {email,password}= req.body;
        await User.findOne({email},(err,user)=>{
            if(user){
                bcrypt.compare(password,user.password,(err,same)=>{
                    if(same){
                        req.session.userID=user._id;
                        res.redirect("/");
                    }
                })
            }
        })
        res.render("login",{
            page_name:"login",
            user:user
        })

    }catch(error){
        console.log("register:"+error)
    }
}
//logout
exports.getLogout=async (req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/");
    })
}