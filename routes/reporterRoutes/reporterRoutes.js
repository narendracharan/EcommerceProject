const express=require("express")
const router=express.Router()
const reporterControllers=require("../../controllers/reporterControllers/reporterControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")


router.post("/createReporter",tokenAuthorisationUser,reporterControllers.createReporter)
router.post("/list",tokenAuthorisationUser,reporterControllers.reporterList)
router.post("/userView/:id",tokenAuthorisationUser,reporterControllers.userView)
router.post("/productView/:id",tokenAuthorisationUser,reporterControllers.productView)
module.exports=router