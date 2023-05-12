const express=require("express")
const { createAddress, addressList, updateAddress, deleteAddress } = require("../../../controllers/User_PanelControllers/addressControllers/addressControllers")
const router=express.Router()

router.post("/create-address",createAddress)
router.post("/address-list",addressList)
router.post("/update-address/:id",updateAddress)
router.delete("/delete-address/:id",deleteAddress)
module.exports=router