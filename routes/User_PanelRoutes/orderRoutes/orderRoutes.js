const express=require("express")
const { createOrder } = require("../../../controllers/Admin_Panel/orderControllers/orderControllers")
const router=express.Router()

router.post("/create-order",createOrder)

module.exports=router