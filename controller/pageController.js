const Product=require('../models/Product')
const Category=require('../models/Category')
const User=require('../models/User')
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
    const user=await User.findById(req.session.userID);
    const categorySlug=req.query.categories;
    const category=await Category.findOne({slug:categorySlug});
    let filter={};
    const query=req.query.search;
    if(categorySlug){
        filter={category:category._id};
    }
    if(query){
        filter={product_name:query}
    }
    if(!query && !categorySlug){
        filter.product_name="";
        filter.category=null;
    }
    const product=await Product.find({
        $or:[
            {product_name: { $regex: '.*' + filter.product_name + '.*', $options: 'i'}},
            {category: filter.category}
            ]
    });
    const category1=await Category.find();
    res.render("blog",{
        page_name:"blog",
        product:product,
        user:user,
        category1:category1
    })
  }
exports.getFurnitures=async (req, res) => {
    const user=await User.findById(req.session.userID);
    const category=await Category.find();
    res.render("furnitures",{
        page_name:"furnitures",
        category:category,
        user:user
    })
  }
exports.getContact=(req, res) => {
    res.render("contact",{
        page_name:"contact"
    })
  }