const express=require("express")
const router=express.Router()
const subCategoryController=require("../../controllers/categoryManagement/subCategory")
const authentication=require("../../middleware/userAuth")

router.post("/createSubCategory",authentication,subCategoryController.subCategory)
router.post("/subCategoryList",authentication,subCategoryController.subCategoryList)
router.patch("/subCategoryUpdate/:id",authentication,subCategoryController.subCategoryUpdate)
router.post("/subCategorySearch",authentication,subCategoryController.subCategorySearch)
router.post("/selectCategory",authentication,subCategoryController.selectCategory)
router.post("/checkSubSubCategory/:id",authentication,subCategoryController.checkSubSubcategory)
router.post("/checkstatus/:id",authentication,subCategoryController.checkStatus)
module.exports=router
