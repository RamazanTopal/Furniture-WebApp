const Product=require('../models/Product')
const User=require('../models/User')
exports.getReservedProduct=async (req,res)=>{
    try{
        
        res.render("blogreserved",{
            user:await User.findById(req.session.userID).populate("products"),
            page_name:"blogreserved"
        });
    }catch(error){

    }
   
}
exports.getProduct=async (req,res)=>{
    const product=await Product.findOne({slug:req.params.slug});
    res.render("product_detail",{
        page_name:"index",
        product:product
    })
}


exports.postProductReserved=async (req,res)=>{
    try{
        const user=await User.findById(req.session.userID);
        await user.products.push({_id:req.body.product_id});
        await user.save();
        res.render("blogreserved",{
            user:await User.findById(req.session.userID).populate("products"),
            page_name:"blogreserved"
        });
    }catch(error){

    }
   
}

exports.postProductCancel=async (req,res)=>{
    try{
        const user=await User.findById(req.session.userID);
        await user.products.pull({_id:req.body.product_id});
        await user.save();
        res.render("blogreserved",{
            user:await User.findById(req.session.userID).populate("products"),
            page_name:"blogreserved"
        });
    }catch(error){

    }
   
}


exports.deleteProduct=async (req,res)=>{
    try{
        await Product.findOneAndRemove({slug:req.params.slug})
        req.flash("success", "Delete product succesfully");
        res.redirect("/blog");

    }catch(error){
        req.flash("error", "Don't delete product succesfully");
        res.redirect("/blog");
    }
}

exports.updateProduct=async (req,res)=>{
    try{
        const product=await Product.findOne({slug:req.params.slug})
        product.product_name=req.body.product_name;
        product.product_description=req.body.product_description;
        product.category=req.body.category;
        product.save();
        res.redirect("/blog");

    }catch(error){

    }
}