const express=require("express")
const router=express.Router()
const staffControllers=require("../../controllers/staffControllers/staffControllers")
const authentication=require("../../middleware/userAuth")


router.post("/createStaff",authentication.userAuth,staffControllers.createStaff)
router.post("/stafflist",authentication.userAuth,staffControllers.staffList)
router.post("/staffSearch",authentication.userAuth,staffControllers.staffSearch)
router.patch("/updateStaff/:id",authentication.userAuth,staffControllers.updateStaff)

module.exports=router