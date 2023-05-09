const express=require("express")
const { userSignup, userLogin, sendMailResetPassword, resetPassword } = require("../../../controllers/User_PanelControllers/userControllers/userControllers")
const { signupValidation } = require("../../../validation/userValidation")
const router=express.Router()
const tokenAuthorisationUser=require("../../../middleware/userAuth")

router.post("/signup",signupValidation,userSignup)
router.post("/login",userLogin)
router.post("/send-mail",sendMailResetPassword)
router.post("/reset-password/:id/:token",resetPassword)
module.exports=router