const express=require("express")
const router=express.Router()
const thoughtControllers=require("../../controllers/thougthControllers/thougthControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createThougth",tokenAuthorisationUser,thoughtControllers.createThougth)
router.post("/list",tokenAuthorisationUser,thoughtControllers.thougthList)
router.post("/thougthSearch",tokenAuthorisationUser,thoughtControllers.thougthSearch)

module.exports=router