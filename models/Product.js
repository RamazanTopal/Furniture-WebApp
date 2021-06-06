const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const slugify=require('slugify');
const productSchema=new Schema({
    product_name:{
        type:String
    },
    product_description:{
        type:String
    },
    image:{
        type:String,
        default:""
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    slug:{
        type:String,
        unique:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

productSchema.pre('validate',function(next){
    this.slug=slugify(this.product_name,{
        lower:true,
        strict:true
    });
    next();
})


const Product=mongoose.model('Product',productSchema);
module.exports=Product;