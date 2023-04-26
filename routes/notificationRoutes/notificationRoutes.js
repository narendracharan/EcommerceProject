const express = require("express");
const router = express.Router();
const notificationControllers = require("../../controllers/notificationControllers/notificationControllers");
const authentication=require("../../middleware/userAuth")

router.post("/createReport",authentication ,notificationControllers.reportNotification);
router.post("/createCustom",authentication,notificationControllers.customNotification);
router.post("/list",authentication,notificationControllers.notificationList)

module.exports = router;
