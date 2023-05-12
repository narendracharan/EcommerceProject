const express=require("express")
const { userSignup, userLogin, sendMailResetPassword, resetPassword, updateProfile, aboutProfile, addNewAddress, addressList, deleteAddress } = require("../../../controllers/User_PanelControllers/userControllers/userControllers")
const { signupValidation } = require("../../../validation/userValidation")
const router=express.Router()
const tokenAuthorisationUser=require("../../../middleware/userAuth")
const { uploads } = require("../../../middleware/imageStorage")

router.post("/signup",signupValidation,userSignup)
router.post("/login",userLogin)
router.post("/send-mail",sendMailResetPassword)
router.post("/reset-password/:id/:token",resetPassword)
router.post("/edit-profile/:id",uploads.single("profile_Pic"),updateProfile)
router.post("/about-profile/:id",aboutProfile)
module.exports=router