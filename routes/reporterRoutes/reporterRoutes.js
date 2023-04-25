const express=require("express")
const router=express.Router()
const reporterControllers=require("../../controllers/reporterControllers/reporterSchema")
const authentication=require("../../middleware/userAuth")

router.post("/createReporter",authentication.userAuth,reporterControllers.createReporter)
router.post("/list",authentication.userAuth,reporterControllers.reporterList)
router.post("/userView/:id",authentication.userAuth,reporterControllers.userView)
router.post("/productView/:id",authentication.userAuth,reporterControllers.productView)
module.exports=router