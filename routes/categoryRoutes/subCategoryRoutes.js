const express=require("express")
const router=express.Router()
const subCategoryController=require("../../controllers/categoryManagement/subCategory")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createSubCategory",tokenAuthorisationUser,subCategoryController.subCategory)
router.post("/subCategoryList",tokenAuthorisationUser,subCategoryController.subCategoryList)
router.patch("/subCategoryUpdate/:id",tokenAuthorisationUser,subCategoryController.subCategoryUpdate)
router.post("/subCategorySearch",tokenAuthorisationUser,subCategoryController.subCategorySearch)
router.post("/selectCategory",tokenAuthorisationUser,subCategoryController.selectCategory)
router.post("/checkSubSubCategory/:id",tokenAuthorisationUser,subCategoryController.checkSubSubcategory)
router.post("/checkstatus/:id",tokenAuthorisationUser,subCategoryController.checkStatus)
module.exports=router
