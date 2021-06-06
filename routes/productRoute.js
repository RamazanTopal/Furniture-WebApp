const express = require("express")
const productController=require('../controller/productController')

const router=express.Router();


router.route('/detail/:slug').get(productController.getProduct)
router.route('/reserved').post(productController.postProductReserved);
router.route('/cancel').post(productController.postProductCancel);
router.route('/reserved').get(productController.getReservedProduct);
router.route('/:slug').delete(productController.deleteProduct);
router.route('/:slug').put(productController.updateProduct);
module.exports=router