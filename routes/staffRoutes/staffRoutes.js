const express=require("express")
const router=express.Router()
const staffControllers=require("../../controllers/staffControllers/staffControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createStaff",tokenAuthorisationUser,staffControllers.createStaff)
router.post("/list",tokenAuthorisationUser,staffControllers.staffList)
router.post("/staffSearch",tokenAuthorisationUser,staffControllers.staffSearch)
router.patch("/updateStaff/:id",tokenAuthorisationUser,staffControllers.updateStaff)

module.exports=router