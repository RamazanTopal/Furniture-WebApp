const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');
const userSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})

userSchema.pre('save',function(next){
    const user=this;
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password=hash;
        next();
    })

})


const User=mongoose.model('User',userSchema);

module.exports=User;