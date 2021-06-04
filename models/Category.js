const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const slugify=require('slugify');
const categorySchema=new Schema({
    category_name:{
        type:String
    },
    category_description:{
        type:String
    },
    slug:{
        type:String,
        unique:true
    }
})

categorySchema.pre('validate',function(next){
    this.slug=slugify(this.category_name,{
        lower:true,
        strict:true
    });
    next();
})



const Category=mongoose.model('Category',categorySchema);

module.exports=Category;