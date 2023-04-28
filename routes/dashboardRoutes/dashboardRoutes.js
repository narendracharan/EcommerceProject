const express=require("express")
const router=express.Router()
const dashbordsController=require("../../controllers/dashboardsControllers/dashboardsControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/userCount",tokenAuthorisationUser,dashbordsController.userCount)
router.post("/list",tokenAuthorisationUser,dashbordsController.recentOrder)
router.post("/search",tokenAuthorisationUser,dashbordsController.recentOrderSearch)
router.post("/orderDetails/:id",tokenAuthorisationUser,dashbordsController.orderDetails)
module.exports=router