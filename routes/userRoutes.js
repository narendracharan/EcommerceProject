const express = require("express");
const router = express.Router();
const user = require("../controllers/userControllers");
const { signupValidation } = require("../validation/userValidation");
const userControllers=require("../controllers/userManagement/createUser")

router.post("/signup", signupValidation, user.userSignup);
router.post("/login", user.userLogin);
router.post("/sendMail", user.sendUserResetPassword);
router.post("/reset-password/:id/:token", user.resetPassword);
router.post("/createUser",userControllers.createUser)
router.get("/userList",userControllers.userList)
router.get("/userSearch",userControllers.userSearch)
router.get("/details/:id",userControllers.userDetails)
module.exports = router;
