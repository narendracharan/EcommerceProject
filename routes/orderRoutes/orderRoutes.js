const express=require("express")
const router=express.Router()
const orderControllers=require("../../controllers/orderControllers/orderControllers")
const tokenAuthorisationUser = require("../../middleware/userAuth")


router.post("/createOrder",tokenAuthorisationUser,orderControllers.createOrder)
router.post("/list",tokenAuthorisationUser,orderControllers.orderList)
router.post("/search",tokenAuthorisationUser,orderControllers.orderSearch)
module.exports=router