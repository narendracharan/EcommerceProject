const express = require("express");
const router = express.Router();
const user = require("../../controllers/adminPanel/userControllers");
const { uploads } = require("../../middleware/imageStorage");
const { signupValidation } = require("../../validation/userValidation");
const authentication=require("../../middleware/userAuth")

router.post("/signup", signupValidation, user.userSignup);
router.post("/login", user.userLogin);
router.post("/sendMail", authentication,user.sendUserResetPassword);
router.post("/reset-password/:id/:token", authentication,user.resetPassword);
router.post("/createUser",authentication,user.createUser)
router.post("/userList",authentication,user.userList)
router.post("/details/:id",authentication,user.userDetails)
router.post("/verifyOtp",authentication,user.OtpVerify)
router.post("/editProfile/:id",authentication,uploads.single("profile_Pic"),user.editProfile)
router.post("/checkStatus/:id",authentication,user.checkStatus)
module.exports = router;
