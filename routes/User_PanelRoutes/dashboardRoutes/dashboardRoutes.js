const express=require("express")
const { countWishList } = require("../../../controllers/User_PanelControllers/dashboardsControllers/dashboardControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/count-wishlist",tokenAuthorisationUser,countWishList)
module.exports=router