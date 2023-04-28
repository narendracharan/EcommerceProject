const express=require("express")
const router=express.Router()
const categoryControllers=require("../../controllers/categoryManagement/categoryControllers")
const {uploads}=require("../../middleware/imageStorage")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/create",tokenAuthorisationUser,uploads.single("categoryPic"),categoryControllers.createCategory)
router.post("/list",tokenAuthorisationUser,categoryControllers.categoryList)
router.post("/search-category",tokenAuthorisationUser,categoryControllers.categorySearch)
router.patch("/update/:id",tokenAuthorisationUser,categoryControllers.categoryUpdate)
router.post("/sub/:id",tokenAuthorisationUser,categoryControllers.checkSubCategory)
router.post("/checkstatus/:id",tokenAuthorisationUser,categoryControllers.checkStatus)
module.exports=router