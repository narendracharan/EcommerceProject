const express = require("express");
const router = express.Router();
const attributeControllers = require("../../controllers/category/attributeControllers");

router.post("/createAttribute", attributeControllers.createAttribute);
router.get("/attributeList", attributeControllers.attributeList);
router.patch("/attributeUpdate/:id", attributeControllers.attributeUpdate);
router.get("/attributeSearch", attributeControllers.attributeSearch);
router.get("/selectCategory",attributeControllers.selectCategory)
router.get("/selectSubCategory",attributeControllers.selectSubCategory)
router.get("/selectSubSubCategory",attributeControllers.selectSubSubCategory)
router.get("/checkValues/:id",attributeControllers.checkValues)
module.exports = router;
