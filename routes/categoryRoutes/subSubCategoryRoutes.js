const express=require("express")
const router=express.Router()
const subSubCategoryContollers=require("../../controllers/categoryManagement/subSubCategory")
const authentication=require("../../middleware/userAuth")


router.post("/createSubSubCategory",authentication.userAuth,subSubCategoryContollers.subSubCategory)
router.post("/subSubCategoryList",authentication.userAuth,subSubCategoryContollers.subSubCategoryList)
router.patch("/subSubCategoryUpdate/:id",authentication.userAuth,subSubCategoryContollers.subSubCategoryUpdate)
router.post("/subSubCategorySearch",authentication.userAuth,subSubCategoryContollers.subSubCategorySearch)
router.post("/selectCategory",authentication.userAuth,subSubCategoryContollers.selectCategory)
router.post("/selectSubCategory",authentication.userAuth,subSubCategoryContollers.selectSubCategory)
router.post("/checkAttribute/:id",authentication.userAuth,subSubCategoryContollers.checkAttribute)
router.post("/checkstatus/:id",authentication.userAuth,subSubCategoryContollers.checkStatus)
module.exports=router