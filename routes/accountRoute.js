const express = require("express")
const accountController=require('../controller/accountController')
const redirectMiddleware=require("../middlewares/redirectMiddleware");
const router=express.Router();

//Register
router.route('/register').get(redirectMiddleware,accountController.getRegister);
router.route('/register').post(redirectMiddleware,accountController.postRegister);
//login
router.route('/login').get(redirectMiddleware,accountController.getLogin);
router.route('/login').post(redirectMiddleware,accountController.postLogin);
//logout
router.route('/logout').get(accountController.getLogout);
module.exports=router