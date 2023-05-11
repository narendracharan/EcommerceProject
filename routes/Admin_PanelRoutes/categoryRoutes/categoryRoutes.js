const express=require("express")
const router=express.Router()
//const {uploads}=require("../../../middleware/imageStorage")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const { createCategory, categoryList, categorySearch, categoryUpdate, checkSubCategory, checkStatus } = require("../../../controllers/Admin_Panel/categoryManagement/categoryControllers")
const imageStorage = require("../../../middleware/imageStorage")

router.post("/create",tokenAuthorisationUser,imageStorage,createCategory)
router.post("/list",tokenAuthorisationUser,categoryList)
router.post("/search-category",tokenAuthorisationUser,categorySearch)
router.patch("/update/:id",tokenAuthorisationUser,categoryUpdate)
router.post("/sub/:id",tokenAuthorisationUser,checkSubCategory)
router.post("/checkstatus/:id",tokenAuthorisationUser,checkStatus)
module.exports=router