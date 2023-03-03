const express=require("express")
const router=express.Router()
const subCategoryController=require("../../controllers/category/subCategory")

router.post("/createSubCategory",subCategoryController.subCategory)
router.get("/subCategoryList",subCategoryController.subCategoryList)
router.patch("/subCategoryUpdate/:id",subCategoryController.subCategoryUpdate)
router.get("/subCategorySearch",subCategoryController.subCategorySearch)
module.exports=router
