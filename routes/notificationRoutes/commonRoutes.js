const express=require("express")
const router=express.Router()
const notificationRoutes=require("../notificationRoutes/notificationRoutes")

router.use("/notification",notificationRoutes)

module.exports=router