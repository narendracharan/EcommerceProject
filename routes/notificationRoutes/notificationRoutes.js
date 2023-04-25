const express = require("express");
const router = express.Router();
const notificationControllers = require("../../controllers/notificationControllers/notificationControllers");
const authentication=require("../../middleware/userAuth")

router.post("/createReport",authentication.userAuth ,notificationControllers.reportNotification);
router.post("/createCustom",authentication.userAuth,notificationControllers.customNotification);
router.post("/list",authentication.userAuth,notificationControllers.notificationList)

module.exports = router;
