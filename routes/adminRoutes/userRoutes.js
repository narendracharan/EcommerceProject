const express = require("express");
const router = express.Router();
const user = require("../../controllers/adminPanel/userControllers");
const { uploads } = require("../../middleware/imageStorage");
const { signupValidation } = require("../../validation/userValidation");
const authentication=require("../../middleware/userAuth")

router.post("/signup", signupValidation, user.userSignup);
router.post("/login", user.userLogin);
router.post("/sendMail", authentication.userAuth,user.sendUserResetPassword);
router.post("/reset-password/:id/:token", authentication.userAuth,user.resetPassword);
router.post("/createUser",authentication.userAuth,user.createUser)
router.post("/userList",authentication.userAuth,user.userList)
router.post("/details/:id",authentication.userAuth,user.userDetails)
router.post("/verifyOtp",authentication.userAuth,user.OtpVerify)
router.post("/editProfile/:id",authentication.userAuth,uploads.single("profile_Pic"),user.editProfile)
router.post("/checkStatus/:id",authentication.userAuth,user.checkStatus)
module.exports = router;
