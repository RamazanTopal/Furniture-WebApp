const User=require('../models/User')
const bcrypt=require('bcrypt');
//register
exports.getRegister=async (req, res)=>{
    try{
        
        res.render("register",{
            page_name:"register"
        })

    }catch(error){
        console.log("getRegister"+error);
    }
}
exports.postRegister=async (req, res)=>{
    try{
        const body = req.body;

        if (!(body.email && body.password)) {
          return res.status(400).send({ error: "Data not formatted properly" });
        }
    
        // createing a new mongoose doc from user data
        const user = new User(body);
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);
        user.save().then(() => res.redirect("/user/login"));
        

    }catch(error){
     console.log("postRegister"+error);
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
                        req.session.userROLE=user.role;
                        res.redirect("/");
                    }
                })
            }
        })

    }catch(error){
     
    }
}
//logout
exports.getLogout=async (req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/");
    })
}