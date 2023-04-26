const express=require("express")
const router=express.Router()
const orderControllers=require("../../controllers/orderControllers/orderControllers")
const authentication=require("../../middleware/userAuth")

router.post("/createOrder",authentication,orderControllers.createOrder)
router.post("/list",authentication,orderControllers.orderList)
router.post("/search",authentication,orderControllers.orderSearch)
module.exports=router