const express=require("express")
const router=express.Router()
const categoryControllers=require("../../controllers/categoryManagement/categoryControllers")
const {uploads}=require("../../middleware/imageStorage")
const authentication=require("../../middleware/userAuth")

router.post("/create",uploads.single("categoryPic"),authentication,categoryControllers.createCategory)
router.post("/list",authentication,categoryControllers.categoryList)
router.post("/search-category",authentication,categoryControllers.categorySearch)
router.patch("/update/:id",authentication,categoryControllers.categoryUpdate)
router.post("/sub/:id",authentication,categoryControllers.checkSubCategory)
router.post("/checkstatus/:id",authentication,categoryControllers.checkStatus)
module.exports=router