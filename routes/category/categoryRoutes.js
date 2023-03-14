const express=require("express")
const router=express.Router()
const categoryControllers=require("../../controllers/category/categoryControllers")
const {uploads}=require("../../middleware/imageStorage")

router.post("/create",uploads.single("categoryPic"),categoryControllers.createCategory)
router.get("/list",categoryControllers.categoryList)
router.get("/search-category",categoryControllers.categorySearch)
router.patch("/update/:id",categoryControllers.categoryUpdate)
router.get("/sub/:id",categoryControllers.checkSubCategory)
module.exports=router