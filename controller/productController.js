const Product=require('../models/Product')


exports.getProduct=async (req,res)=>{
    const product=await Product.findOne({slug:req.params.slug});
    res.render("product_detail",{
        page_name:"index",
        product:product
    })
}