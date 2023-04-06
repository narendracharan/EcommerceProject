const express=require("express")
const router=express.Router()
const subSubCategoryContollers=require("../../controllers/userPanel/subSubCategory")

router.post("/createSubSubCategory/:id",subSubCategoryContollers.subSubCategory)
router.get("/subSubCategoryList",subSubCategoryContollers.subSubCategoryList)
router.patch("/subSubCategoryUpdate/:id",subSubCategoryContollers.subSubCategoryUpdate)
router.get("/subSubCategorySearch",subSubCategoryContollers.subSubCategorySearch)
router.get("/selectCategory",subSubCategoryContollers.selectCategory)
router.get("/selectSubCategory",subSubCategoryContollers.selectSubCategory)
router.get("/checkAttribute/:id",subSubCategoryContollers.checkAttribute)
router.post("/checkstatus/:id",subSubCategoryContollers.checkStatus)
module.exports=router