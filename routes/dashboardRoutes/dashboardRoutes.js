const express=require("express")
const router=express.Router()
const dashbordsController=require("../../controllers/dashboardsControllers/dashboardsControllers")
const authentication=require("../../middleware/userAuth")

router.post("/userCount",authentication.userAuth,dashbordsController.userCount)
router.post("/list",authentication.userAuth,dashbordsController.recentOrder)
router.post("/search",authentication.userAuth,dashbordsController.recentOrderSearch)
router.post("/orderDetails/:id",authentication.userAuth,dashbordsController.orderDetails)
module.exports=router