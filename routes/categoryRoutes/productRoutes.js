const express=require("express")
const router=express.Router()
const productControllers=require("../../controllers/categoryManagement/productControlers")
const { uploads } = require("../../middleware/imageStorage")
const authentication=require("../../middleware/userAuth")

router.post("/createProduct",authentication.userAuth,uploads.single("product_Pic"),productControllers.createProduct)
router.post("/productList",authentication.userAuth,productControllers.productList)
router.post("/productSearch",authentication.userAuth,productControllers.productSearch)
module.exports=router