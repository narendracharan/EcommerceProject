const express=require("express")
const router=express.Router()
const productControllers=require("../../controllers/categoryManagement/productControlers")
const { uploads } = require("../../middleware/imageStorage")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createProduct",tokenAuthorisationUser,uploads.single("product_Pic"),productControllers.createProduct)
router.post("/productList",tokenAuthorisationUser,productControllers.productList)
router.post("/productSearch",tokenAuthorisationUser,productControllers.productSearch)
module.exports=router