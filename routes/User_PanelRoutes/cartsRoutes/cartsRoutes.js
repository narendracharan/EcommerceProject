const express=require("express")
const { addToCart, myCarts, deleteProduct, cartsList, totalCarts } = require("../../../controllers/User_PanelControllers/cartsControllers/cartsControllers")
const router=express.Router()

router.post("/add-cart",addToCart)
router.post("/mycarts/:id",myCarts)
router.delete("/delete-product/:id",deleteProduct)
router.post("/carts-list",cartsList)
router.post("/carts-total/:id",totalCarts)
module.exports=router