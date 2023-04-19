const express=require("express")
const router=express.Router()
const subCategoryController=require("../../controllers/categoryManagement/subCategory")
const authentication=require("../../middleware/userAuth")

router.post("/createSubCategory",authentication.userAuth,subCategoryController.subCategory)
router.post("/subCategoryList",authentication.userAuth,subCategoryController.subCategoryList)
router.patch("/subCategoryUpdate/:id",authentication.userAuth,subCategoryController.subCategoryUpdate)
router.post("/subCategorySearch",authentication.userAuth,subCategoryController.subCategorySearch)
router.post("/selectCategory",authentication.userAuth,subCategoryController.selectCategory)
router.post("/checkSubSubCategory/:id",authentication.userAuth,subCategoryController.checkSubSubcategory)
router.post("/checkstatus/:id",authentication.userAuth,subCategoryController.checkStatus)
module.exports=router
