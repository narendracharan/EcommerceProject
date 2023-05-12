const express=require("express")
const { productSearch, productList, productDetails, relatedProduct, compareProduct } = require("../../../controllers/User_PanelControllers/productContorllers/productControllers")
const router=express.Router()

router.post("/list",productList)
router.post("/details/:id",productDetails)
router.post("/search",productSearch)
router.post("/releted-product/:id",relatedProduct)
router.post("/compare-product/:id",compareProduct)
module.exports=router