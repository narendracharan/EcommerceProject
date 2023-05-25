const express=require("express")
const { addToCart, deleteProduct, cartsList, applyCoupan, cartCount } = require("../../../controllers/User_PanelControllers/cartsControllers/cartsControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/add-cart",tokenAuthorisationUser,addToCart)
router.delete("/delete-product/:id",tokenAuthorisationUser,deleteProduct)
router.post("/carts-list",tokenAuthorisationUser,cartsList)
router.post("/apply-coupan",tokenAuthorisationUser,applyCoupan)
//router.post("/carts-summery",orderSummery)
router.post("/cart-count",tokenAuthorisationUser,cartCount)
module.exports=router