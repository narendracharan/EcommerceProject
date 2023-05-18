const express=require("express")
const { createOrder } = require("../../../controllers/User_PanelControllers/orderControlles/orderControllers")
const router=express.Router()

router.post("/create-order",createOrder)

module.exports=router