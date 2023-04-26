const express=require("express")
const router=express.Router()
const reporterControllers=require("../../controllers/reporterControllers/reporterSchema")
const authentication=require("../../middleware/userAuth")

router.post("/createReporter",authentication,reporterControllers.createReporter)
router.post("/list",authentication,reporterControllers.reporterList)
router.post("/userView/:id",authentication,reporterControllers.userView)
router.post("/productView/:id",authentication,reporterControllers.productView)
module.exports=router