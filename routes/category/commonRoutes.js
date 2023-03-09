const express = require("express");
const router = express.Router();
const categoryRoutes = require("./categoryRoutes");
const subCategoryRoutes = require("../category/subCategoryRoutes");
const subSubCategoryRoutes = require("../category/subSubCategoryRoutes");
const attributeRoutes = require("../category/attributeRoutes");
const valuesRoutes=require("../category/valuesRoutes")

router.use("/category", categoryRoutes);
router.use("/subCategory", subCategoryRoutes);
router.use("/subSubCategory", subSubCategoryRoutes);
router.use("/attribute", attributeRoutes);
router.use("/values",valuesRoutes)
module.exports = router;
