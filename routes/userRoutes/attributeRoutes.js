const express = require("express");
const router = express.Router();
const attributeControllers = require("../../controllers/userPanel/attributeControllers");

router.post("/createAttribute", attributeControllers.createAttribute);
router.get("/attributeList", attributeControllers.attributeList);
router.patch("/attributeUpdate/:id", attributeControllers.attributeUpdate);
router.get("/attributeSearch", attributeControllers.attributeSearch);
router.get("/selectCategory",attributeControllers.selectCategory)
router.get("/selectSubCategory",attributeControllers.selectSubCategory)
router.get("/selectSubSubCategory",attributeControllers.selectSubSubCategory)
router.get("/checkValues/:id",attributeControllers.checkValues)
router.patch("/checkStatus/:id",attributeControllers.checkStatus)
module.exports = router;
