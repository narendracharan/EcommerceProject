const express=require("express")
const router=express.Router()
const categoryControllers=require("../../controllers/categoryManagement/categoryControllers")
const {uploads}=require("../../middleware/imageStorage")
const authentication=require("../../middleware/userAuth")

router.post("/create",uploads.single("categoryPic"),authentication.userAuth,categoryControllers.createCategory)
router.post("/list",authentication.userAuth,categoryControllers.categoryList)
router.post("/search-category",authentication.userAuth,categoryControllers.categorySearch)
router.patch("/update/:id",authentication.userAuth,categoryControllers.categoryUpdate)
router.post("/sub/:id",authentication.userAuth,categoryControllers.checkSubCategory)
router.post("/checkstatus/:id",authentication.userAuth,categoryControllers.checkStatus)
module.exports=router