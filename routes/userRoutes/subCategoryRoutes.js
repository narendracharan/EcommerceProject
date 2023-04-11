const express=require("express")
const router=express.Router()
const subCategoryController=require("../../controllers/userPanel/subCategory")

router.post("/createSubCategory",subCategoryController.subCategory)
router.get("/subCategoryList",subCategoryController.subCategoryList)
router.patch("/subCategoryUpdate/:id",subCategoryController.subCategoryUpdate)
router.get("/subCategorySearch",subCategoryController.subCategorySearch)
router.get("/selectCategory",subCategoryController.selectCategory)
router.get("/checkSubSubCategory/:id",subCategoryController.checkSubSubcategory)
router.post("/checkstatus/:id",subCategoryController.checkStatus)
module.exports=router
