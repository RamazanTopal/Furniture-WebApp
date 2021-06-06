const Category=require('../models/Category')
const Product=require('../models/Product')

exports.createProduct=async (req, res)=>{
    try{
        await Product.create({
            product_name:req.body.product_name,
            product_description:req.body.product_description,
            image:req.body.image,
            category:req.body.category,
            user:req.session.userID
        })
        req.flash("success", "Create product succesfully");
        res.redirect("/admin/productadd")

    }catch(error){
        req.flash("error", "Don't create product succesfully");
        res.redirect("/admin/productadd")
    }
}
exports.getProduct=async (req, res)=>{
    try{
        const category=await Category.find();
        res.render("productadd",{
            page_name:"productadd",
            category:category
        })

    }catch(error){

    }
}

exports.createCategory=async (req, res)=>{
    try{
        await Category.create(req.body)
        req.flash("success", "Create category succesfully");
        res.redirect("/admin/categoryAdd")

    }catch(error){
        req.flash("error", "Don't create category succesfully");
        res.redirect("category_add")
    }
}
exports.getCategory=async (req, res)=>{
    try{
        
        res.render("category_add",{
            page_name:"categoryAdd"
        })

    }catch(error){

    }
}


exports.deleteCategory=async(req,res)=>{
    try{
        await Category.findOneAndRemove({slug:req.params.slug})
        req.flash("success", "Delete product succesfully");
        res.redirect("/furnitures");

    }catch(error){
        req.flash("error", "Don't delete product succesfully");
        res.redirect("/furnitures");
    }
}

exports.updateCategory=async (req,res)=>{
    try{
        const category=await Category.findOne({slug:req.params.slug})
        category.category_name=req.body.category_name;
        category.category_description=req.body.category_description;
        category.save();
        res.redirect("/furnitures");

    }catch(error){

    }
}