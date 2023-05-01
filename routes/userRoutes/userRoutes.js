const express = require("express");
const router = express.Router();
const user = require("../../controllers/userManagement/userControllers");
const { uploads } = require("../../middleware/imageStorage");
const { signupValidation } = require("../../validation/userValidation");
const tokenAuthorisationUser = require("../../middleware/userAuth");

router.post("/signup",signupValidation, user.userSignup);
router.post("/login", user.userLogin);
router.post("/sendMail", tokenAuthorisationUser,user.sendUserResetPassword);
router.post("/reset-password/:id/:token", tokenAuthorisationUser,user.resetPassword);
router.post("/createUser",tokenAuthorisationUser,user.createUser)
router.post("/userList",tokenAuthorisationUser,user.userList)
router.post("/details/:id",tokenAuthorisationUser,user.userDetails)
router.post("/verifyOtp",tokenAuthorisationUser,user.OtpVerify)
router.post("/editProfile/:id",tokenAuthorisationUser,uploads.single("profile_Pic"),user.editProfile)
router.post("/checkStatus/:id",tokenAuthorisationUser,user.checkStatus)
module.exports = router;
