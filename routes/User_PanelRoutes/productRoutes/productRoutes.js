const express=require("express")
const { productSearch, productList, productDetails } = require("../../../controllers/User_PanelControllers/productContorllers/productControllers")
const router=express.Router()

router.post("/list",productList)
router.post("/details/:id",productDetails)
router.post("/search-product",productSearch)

module.exports=router
