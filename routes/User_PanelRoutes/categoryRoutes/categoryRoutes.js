const express=require("express")
const { categoryList, subCatagoryList } = require("../../../controllers/User_PanelControllers/categoryControllers/categoryControllers")
const router=express.Router()

router.post("/category-list",categoryList)
router.post("/category-subCategory/:id",subCatagoryList)

module.exports=router