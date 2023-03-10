const express=require("express")
const router=express.Router()
const subCategoryController=require("../../controllers/category/subCategory")

router.post("/createSubCategory",subCategoryController.subCategory)
router.get("/subCategoryList",subCategoryController.subCategoryList)
router.patch("/subCategoryUpdate/:id",subCategoryController.subCategoryUpdate)
router.get("/subCategorySearch",subCategoryController.subCategorySearch)
router.get("/selectCategory",subCategoryController.selectCategory)
router.get("/checkSubSubCategory/:id",subCategoryController.checkSubSubcategory)
module.exports=router
