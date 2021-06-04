const Category=require('../models/Category')
const Product=require('../models/Product')
exports.createProduct=async (req, res)=>{
    try{
        const product= await Product.create(req.body)
        res.render("productadd",{
            page_name:"index",
            product:product
        })

    }catch(error){

    }
}
exports.getProduct=async (req, res)=>{
    try{
        
        res.render("productadd",{
            page_name:"index"
        })

    }catch(error){

    }
}

exports.createCategory=async (req, res)=>{
    try{
        const category= await Category.create(req.body)
        res.render("category_add",{
            page_name:"index",
            category:category
        })

    }catch(error){
        console.log("category:"+error)
    }
}
exports.getCategory=async (req, res)=>{
    try{
        
        res.render("category_add",{
            page_name:"index"
        })

    }catch(error){

    }
}