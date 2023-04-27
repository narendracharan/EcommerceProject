const express=require("express")
const router=express.Router()
const contentControllers=require("../../controllers/contentControllers/contentControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createContent",tokenAuthorisationUser,contentControllers.createContent)
router.patch("/updateContent/:id",tokenAuthorisationUser,contentControllers.updateContent)
router.post("/list",tokenAuthorisationUser,contentControllers.contentList)
module.exports=router