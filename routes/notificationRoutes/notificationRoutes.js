const express = require("express");
const router = express.Router();
const notificationControllers = require("../../controllers/notificationControllers/notificationControllers");
const tokenAuthorisationUser = require("../../middleware/userAuth");

router.post("/createReport",tokenAuthorisationUser ,notificationControllers.reportNotification);
router.post("/createCustom",tokenAuthorisationUser,notificationControllers.customNotification);
router.post("/list",tokenAuthorisationUser,notificationControllers.notificationList)

module.exports = router;
