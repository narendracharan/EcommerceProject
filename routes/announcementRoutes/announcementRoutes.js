const express=require("express")
const router=express.Router()
const announcementControllers=require("../../controllers/announcementControllers/announcementControllers")
const { uploads } = require("../../middleware/imageStorage")
const authentication=require("../../middleware/userAuth")

router.post("/create",authentication,uploads.single("pic"),announcementControllers.createAnnouncement)
router.post("/search",authentication,announcementControllers.searchAnnouncement)
router.post("/list",authentication,announcementControllers.announcementList)
module.exports=router