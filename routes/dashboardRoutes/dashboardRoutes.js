const express=require("express")
const router=express.Router()
const dashbordsController=require("../../controllers/dashboardsControllers/dashboardsControllers")
const authentication=require("../../middleware/userAuth")

router.post("/userCount",authentication,dashbordsController.userCount)
router.post("/list",authentication,dashbordsController.recentOrder)
router.post("/search",authentication,dashbordsController.recentOrderSearch)
router.post("/orderDetails/:id",authentication,dashbordsController.orderDetails)
module.exports=router