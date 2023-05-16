const express=require("express")
const { addToCart, myCarts, deleteProduct, cartsList, totalCarts, applyCoupan } = require("../../../controllers/User_PanelControllers/cartsControllers/cartsControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/add-cart",tokenAuthorisationUser,addToCart)
router.delete("/delete-product/:id",tokenAuthorisationUser,deleteProduct)
router.post("/carts-list",tokenAuthorisationUser,cartsList)
router.post("/apply-coupan",applyCoupan)
module.exports=router