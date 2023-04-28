const express=require("express")
const router=express.Router()
const subSubCategoryContollers=require("../../controllers/categoryManagement/subSubCategory")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/createSubSubCategory",tokenAuthorisationUser,subSubCategoryContollers.subSubCategory)
router.post("/subSubCategoryList",tokenAuthorisationUser,subSubCategoryContollers.subSubCategoryList)
router.patch("/subSubCategoryUpdate/:id",tokenAuthorisationUser,subSubCategoryContollers.subSubCategoryUpdate)
router.post("/subSubCategorySearch",tokenAuthorisationUser,subSubCategoryContollers.subSubCategorySearch)
router.post("/selectCategory",tokenAuthorisationUser,subSubCategoryContollers.selectCategory)
router.post("/selectSubCategory",tokenAuthorisationUser,subSubCategoryContollers.selectSubCategory)
router.post("/checkAttribute/:id",tokenAuthorisationUser,subSubCategoryContollers.checkAttribute)
router.post("/checkstatus/:id",tokenAuthorisationUser,subSubCategoryContollers.checkStatus)

module.exports=router