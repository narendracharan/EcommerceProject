const express=require("express")
const router=express.Router()
const subSubCategoryContollers=require("../../controllers/category/subSubCategory")

router.post("/createSubSubCategory",subSubCategoryContollers.subSubCategory)
router.get("/subSubCategoryList",subSubCategoryContollers.subSubCategoryList)
router.patch("/subSubCategoryUpdate/:id",subSubCategoryContollers.subSubCategoryUpdate)
router.get("subSubCategorySearch",subSubCategoryContollers.subSubCategorySearch)
router.get("/selectCategory",subSubCategoryContollers.selectCategory)
router.get("/selectSubCategory",subSubCategoryContollers.selectSubCategory)
router.get("/checkAttribute/:id",subSubCategoryContollers.checkAttribute)
module.exports=router