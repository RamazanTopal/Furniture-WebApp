const express = require("express")
const productController=require('../controller/productController')

const router=express.Router();


router.route('/:slug').get(productController.getProduct)



module.exports=router