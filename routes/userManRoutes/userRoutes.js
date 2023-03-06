const express=require("express")
const router=express.Router()
const userControllers=require("../../controllers/userManagement/createUser")

router.post("/createUser",userControllers.createUser)
router.get("/userList",userControllers.userList)
router.get("/userSearch",userControllers.userSearch)
router.get("/follower/:id/:follower",userControllers.userFollower)
router.get("/following/:id/:following",userControllers.userFollowing)
router.get("/details/:id",userControllers.userDetails)
module.exports=router