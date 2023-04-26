const express=require("express")
const router=express.Router()
const productControllers=require("../../controllers/categoryManagement/productControlers")
const { uploads } = require("../../middleware/imageStorage")
const authentication=require("../../middleware/userAuth")

router.post("/createProduct",authentication,uploads.single("product_Pic"),productControllers.createProduct)
router.post("/productList",authentication,productControllers.productList)
router.post("/productSearch",authentication,productControllers.productSearch)
module.exports=router