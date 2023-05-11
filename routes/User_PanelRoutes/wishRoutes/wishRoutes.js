const express=require("express")
const { createWish, wishlist, deleteWishList } = require("../../../controllers/User_PanelControllers/wishlistControllers/wishlistControllers")
const router=express.Router()

router.post("/add-wish",createWish)
router.post("/wish-List",wishlist)
router.delete("/wish-delete/:id",deleteWishList)
module.exports=router