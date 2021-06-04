const express = require("express")
const adminController=require('../controller/adminController')

const router=express.Router();

//Product_Add
router.route('/productadd').post(adminController.createProduct);
router.route('/productadd').get(adminController.getProduct);
//Category_Add
router.route('/categoryAdd').post(adminController.createCategory);
router.route('/categoryAdd').get(adminController.getCategory);

module.exports=router