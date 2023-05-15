const express=require("express")
const { addToCart, myCarts, deleteProduct, cartsList, totalCarts } = require("../../../controllers/User_PanelControllers/cartsControllers/cartsControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/add-cart",tokenAuthorisationUser,addToCart)
router.post("/mycarts/:id",tokenAuthorisationUser,myCarts)
router.delete("/delete-product/:id",tokenAuthorisationUser,deleteProduct)
router.post("/carts-list",tokenAuthorisationUser,cartsList)
module.exports=router