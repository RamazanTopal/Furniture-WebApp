const express = require("express")
const adminController=require('../controller/adminController')
const authMiddleware=require('../middlewares/authMiddlewares')
const router=express.Router();
const roleMiddleware=require('../middlewares/roleMiddleware');
//Product_Add
router.route('/productadd').post(roleMiddleware(),authMiddleware,adminController.createProduct);
router.route('/productadd').get(roleMiddleware(),authMiddleware,adminController.getProduct);
//Category_Add
router.route('/categoryAdd').post(roleMiddleware(),authMiddleware,adminController.createCategory);
router.route('/categoryAdd').get(roleMiddleware(),authMiddleware,adminController.getCategory);
//delete
router.route('/:slug').delete(roleMiddleware(),authMiddleware,adminController.deleteCategory);
//update
router.route('/:slug').put(roleMiddleware(),authMiddleware,adminController.updateCategory);
module.exports=router