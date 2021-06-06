const mongoose=require('mongoose');
const Schema=mongoose.Schema;
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
    },
    role:{
        type:String,
        enum:['customer','admin'],
        default:'customer'
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
})




const User=mongoose.model('User',userSchema);

module.exports=User;