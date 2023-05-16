const express=require("express")
const { productSearch, productList, productDetails, relatedProduct, compareProduct, rating } = require("../../../controllers/User_PanelControllers/productContorllers/productControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/list",tokenAuthorisationUser,productList)
router.post("/details/:id",tokenAuthorisationUser,productDetails)
router.post("/search-product",tokenAuthorisationUser,productSearch)
router.post("/releted-product/:id",tokenAuthorisationUser,relatedProduct)
router.post("/compare-product/:id",tokenAuthorisationUser,compareProduct)
router.post("/product-rating",rating)
module.exports=router