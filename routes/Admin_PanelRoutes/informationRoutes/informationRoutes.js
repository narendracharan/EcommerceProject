const express=require("express")
const { createInformation, infoList, infoUpdate } = require("../../../controllers/Admin_Panel/informationControllers/information")
const router=express.Router()

router.post("/create",createInformation)
router.post("/list",infoList)
router.patch("/update/:id",infoUpdate)
module.exports=router