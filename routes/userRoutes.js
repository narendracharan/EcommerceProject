const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const { signupValidation } = require("../validation/userValidation");

router.post("/signup", signupValidation, userControllers.userSignup);
router.post("/login", userControllers.userLogin);
router.post("/sendMail", userControllers.sendUserResetPassword);
router.post("/reset-password/:id/:token", userControllers.resetPassword);
module.exports = router;
