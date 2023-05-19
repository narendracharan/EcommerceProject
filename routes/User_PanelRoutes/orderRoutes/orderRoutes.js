const express=require("express")
const { createOrder } = require("../../../controllers/User_PanelControllers/orderControlles/orderControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/create-order",tokenAuthorisationUser,createOrder)

module.exports=router