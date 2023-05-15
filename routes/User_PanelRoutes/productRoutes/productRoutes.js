const express=require("express")
const { productSearch, productList, productDetails, relatedProduct, compareProduct } = require("../../../controllers/User_PanelControllers/productContorllers/productControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/list",tokenAuthorisationUser,productList)
router.post("/details/:id",tokenAuthorisationUser,productDetails)
router.post("/search-product",tokenAuthorisationUser,productSearch)
router.post("/releted-product/:id",tokenAuthorisationUser,relatedProduct)
router.post("/compare-product/:id",tokenAuthorisationUser,compareProduct)
module.exports=router