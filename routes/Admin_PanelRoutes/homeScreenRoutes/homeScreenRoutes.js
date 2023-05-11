const express=require("express")
const router=express.Router()
const tokenAuthorisationUser = require("../../../middleware/userAuth")
const { createBannerOne, createBannerTwo, createBannerThree, createBannerFour, createBannerFive } = require("../../../controllers/Admin_Panel/homeScreenControllers/homeScreenControllers")
const imageStorage = require("../../../middleware/imageStorage")

router.post("/ScreenOne",tokenAuthorisationUser,imageStorage,createBannerOne)
router.post("/ScreenTwo",tokenAuthorisationUser,imageStorage,createBannerTwo)
router.post("/ScreenThree",tokenAuthorisationUser,imageStorage,createBannerThree)
router.post("/ScreenFour",tokenAuthorisationUser,imageStorage,createBannerFour)
router.post("/ScreenFive",tokenAuthorisationUser,imageStorage,createBannerFive)
module.exports=router