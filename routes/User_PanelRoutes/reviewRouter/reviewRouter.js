const express=require("express")
const { createReview, getReview } = require("../../../controllers/User_PanelControllers/reviewControllers/reviewControllers")
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const router=express.Router()

router.post("/add-review",tokenAuthorisationUser,createReview)

module.exports=router