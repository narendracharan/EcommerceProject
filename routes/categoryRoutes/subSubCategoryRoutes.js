const express=require("express")
const router=express.Router()
const subSubCategoryContollers=require("../../controllers/categoryManagement/subSubCategory")
const authentication=require("../../middleware/userAuth")


router.post("/createSubSubCategory",authentication,subSubCategoryContollers.subSubCategory)
router.post("/subSubCategoryList",authentication,subSubCategoryContollers.subSubCategoryList)
router.patch("/subSubCategoryUpdate/:id",authentication,subSubCategoryContollers.subSubCategoryUpdate)
router.post("/subSubCategorySearch",authentication,subSubCategoryContollers.subSubCategorySearch)
router.post("/selectCategory",authentication,subSubCategoryContollers.selectCategory)
router.post("/selectSubCategory",authentication,subSubCategoryContollers.selectSubCategory)
router.post("/checkAttribute/:id",authentication,subSubCategoryContollers.checkAttribute)
router.post("/checkstatus/:id",authentication,subSubCategoryContollers.checkStatus)
module.exports=router