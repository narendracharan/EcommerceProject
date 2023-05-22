const express=require("express")
const { createOrder, orderDetails, orderList } = require("../../../controllers/User_PanelControllers/orderControlles/orderControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/create-order",tokenAuthorisationUser,createOrder)
router.post("/order-Details/:id",tokenAuthorisationUser,orderDetails)
router.post("/order-list",tokenAuthorisationUser,orderList)
module.exports=router