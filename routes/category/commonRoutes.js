const express=require("express")
const router=express.Router()
const categoryRoutes=require("./categoryRoutes")
const subCategoryRoutes=require("../category/subCategoryRoutes")
const subSubCategoryRoutes=require("../category/subSubCategoryRoutes")

router.use("/category",categoryRoutes)
router.use("/subCategory",subCategoryRoutes)
router.use("/subSubCategory",subSubCategoryRoutes)
module.exports=router