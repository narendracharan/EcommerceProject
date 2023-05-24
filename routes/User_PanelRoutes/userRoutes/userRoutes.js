const express=require("express")
const { userSignup, userLogin, sendMailResetPassword, resetPassword, updateProfile, aboutProfile, addNewAddress, addressList, deleteAddress, logOut, userResetPassword, verifyEmail, deleteAccount } = require("../../../controllers/User_PanelControllers/userControllers/userControllers")
const { signupValidation } = require("../../../validation/userValidation")
const router=express.Router()
const tokenAuthorisationUser=require("../../../middleware/userAuth")
const { uploads } = require("../../../middleware/imageStorage")

router.post("/signup",signupValidation,userSignup)
router.post("/login",userLogin)
router.post("/send-mail",tokenAuthorisationUser,sendMailResetPassword)
router.post("/reset-password/:id/:token",tokenAuthorisationUser,resetPassword)
router.post("/edit-profile/:id",tokenAuthorisationUser,uploads.single("profile_Pic"),updateProfile)
router.post("/about-profile/:id",tokenAuthorisationUser,aboutProfile)
router.post("/logOut",tokenAuthorisationUser,logOut)
router.post("/change-password/:id",tokenAuthorisationUser,userResetPassword)
router.post("/verify-email",tokenAuthorisationUser,verifyEmail)
router.delete("/delete-account/:id",tokenAuthorisationUser,deleteAccount)
module.exports=router