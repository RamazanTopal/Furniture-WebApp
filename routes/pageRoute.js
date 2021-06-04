const express = require("express")
const pageController=require('../controller/pageController')

const router=express.Router();


router.route('/').get(pageController.getIndex);
router.route('/about').get(pageController.getAbout);
router.route('/blog').get(pageController.getBlog);
router.route('/contact').get(pageController.getContact);
router.route('/furnitures').get(pageController.getFurnitures);



module.exports=router