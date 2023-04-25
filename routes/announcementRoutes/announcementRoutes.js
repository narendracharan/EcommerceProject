const express=require("express")
const router=express.Router()
const announcementControllers=require("../../controllers/announcementControllers/announcementControllers")
const { uploads } = require("../../middleware/imageStorage")
const authentication=require("../../middleware/userAuth")

router.post("/create",authentication.userAuth,uploads.single("pic"),announcementControllers.createAnnouncement)
router.post("/search",authentication.userAuth,announcementControllers.searchAnnouncement)
router.post("/list",authentication.userAuth,announcementControllers.announcementList)
module.exports=router