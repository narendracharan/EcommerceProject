const express=require("express")
const router=express.Router()
const homeScreenControllers=require("../../controllers/homeScreenControllers/homeScreenControllers")
const { uploads } = require("../../middleware/imageStorage")
const tokenAuthorisationUser = require("../../middleware/userAuth")

router.post("/ScreenOne",tokenAuthorisationUser,uploads.single("homeScreenOne"),homeScreenControllers.createBannerOne)
router.post("/ScreenTwo",tokenAuthorisationUser,uploads.single("homeScreenTwo"),homeScreenControllers.createBannerTwo)
router.post("/ScreenThree",tokenAuthorisationUser,uploads.single("homeScreenThree"),homeScreenControllers.createBannerThree)
router.post("/ScreenFour",tokenAuthorisationUser,uploads.single("homeScreenFour"),homeScreenControllers.createBannerFour)
router.post("/ScreenFive",tokenAuthorisationUser,uploads.single("homeScreenFive"),homeScreenControllers.createBannerFive)
module.exports=router