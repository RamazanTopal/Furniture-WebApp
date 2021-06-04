const express = require("express")
const accountController=require('../controller/accountController')

const router=express.Router();

//Register
router.route('/register').get(accountController.getRegister);
router.route('/register').post(accountController.postRegister);
//login
router.route('/login').get(accountController.getLogin);
router.route('/login').post(accountController.postLogin);
//logout
router.route('/logout').get(accountController.getLogout);
module.exports=router