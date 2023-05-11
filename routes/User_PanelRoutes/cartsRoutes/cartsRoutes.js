const express=require("express")
const { addToCart, myCarts, deleteProduct, cartsList } = require("../../../controllers/User_PanelControllers/cartsControllers/cartsControllers")
const router=express.Router()

router.post("/add-cart",addToCart)
router.post("/mycarts/:id",myCarts)
router.delete("/delete-product/:id",deleteProduct)
router.post("/carts-list",cartsList)
module.exports=router