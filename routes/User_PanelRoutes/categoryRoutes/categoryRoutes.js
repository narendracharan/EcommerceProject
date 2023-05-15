const express=require("express")
const { categoryList, subCatagoryList } = require("../../../controllers/User_PanelControllers/categoryControllers/categoryControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/category-list",tokenAuthorisationUser,categoryList)
router.post("/category-subCategory/:id",tokenAuthorisationUser,subCatagoryList)

module.exports=router