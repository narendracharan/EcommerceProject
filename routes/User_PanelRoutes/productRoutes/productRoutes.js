const express=require("express")
const { productSearch, productList, productDetails, relatedProduct, compareProduct, rating, filterPrice, lowPrice, highPrice, asendingProduct, descendingProduct } = require("../../../controllers/User_PanelControllers/productContorllers/productControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/list",tokenAuthorisationUser,productList)
router.post("/details/:id",tokenAuthorisationUser,productDetails)
router.post("/search-product",tokenAuthorisationUser,productSearch)
router.post("/releted-product/:id",tokenAuthorisationUser,relatedProduct)
router.post("/compare-product/:id",tokenAuthorisationUser,compareProduct)
//router.post("/product-rating",rating)
router.post("/price",tokenAuthorisationUser,filterPrice)
router.post("/low-price",tokenAuthorisationUser,lowPrice)
router.post("/high-price",tokenAuthorisationUser,highPrice)
router.post("/asending-product",tokenAuthorisationUser,asendingProduct)
router.post("/descending-product",tokenAuthorisationUser,descendingProduct)

module.exports=router