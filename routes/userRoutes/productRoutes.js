const express=require("express")
const router=express.Router()
const productControllers=require("../../controllers/userPanel/productControlers")
const { uploads } = require("../../middleware/imageStorage")

router.post("/createProduct",uploads.single("product_Pic"),productControllers.createProduct)
router.get("/productList",productControllers.productList)
router.get("/productSearch",productControllers.productSearch)
module.exports=router