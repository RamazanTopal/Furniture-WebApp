const Product=require('../models/Product')
const Category=require('../models/Category')
exports.getIndex=(req, res) => {
    res.render("index",{
        page_name:"index"
    })
}

exports.getAbout=(req, res) => {
    res.render("about",{
        page_name:"about"
    })
  }

exports.getBlog= async (req, res) => {
    const categorySlug=req.query.categories;
    const category=await Category.findOne({slug:categorySlug});
    let filter={};
    if(categorySlug){
        filter={category:category._id};
    }
    const product=await Product.find(filter);
    res.render("blog",{
        page_name:"blog",
        product:product
    })
  }
exports.getFurnitures=async (req, res) => {
    const category=await Category.find();
    res.render("furnitures",{
        page_name:"furnitures",
        category:category
    })
  }
exports.getContact=(req, res) => {
    res.render("contact",{
        page_name:"contact"
    })
  }

  