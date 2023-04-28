const express=require("express")
const router=express.Router()
const announcementControllers=require("../../controllers/announcementControllers/announcementControllers")
const { uploads } = require("../../middleware/imageStorage")
const tokenAuthorisationUser = require("../../middleware/userAuth")


router.post("/create",tokenAuthorisationUser,uploads.single("pic"),announcementControllers.createAnnouncement)
router.post("/search",tokenAuthorisationUser,announcementControllers.searchAnnouncement)
router.post("/list",tokenAuthorisationUser,announcementControllers.announcementList)
module.exports=router