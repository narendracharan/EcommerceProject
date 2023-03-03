const express=require("express")
const router=express.Router()
const subSubCategoryContollers=require("../../controllers/category/subSubCategory")

router.post("/createSubSubCategory",subSubCategoryContollers.subSubCategory)
router.get("/subSubCategoryList",subSubCategoryContollers.subSubCategoryList)
router.patch("/subSubCategoryUpdate/:id",subSubCategoryContollers.subSubCategoryUpdate)
router.get("subSubCategorySearch",subSubCategoryContollers.subSubCategorySearch)
module.exports=router