const express=require("express")
const { addToCart, myCarts } = require("../../../controllers/User_PanelControllers/cartsControllers/cartsControllers")
const router=express.Router()

router.post("/add-cart",addToCart)
router.post("/mycarts/:id",myCarts)
module.exports=router