const valueSchema = require("../../models/categorySchema/valuesSchema");
const category = require("../../models/categorySchema/categorySchema");
const subCategory = require("../../models/categorySchema/subCategorySchema");
const subSubCategory = require("../../models/categorySchema/subSubCategorySchema");
const attribute = require("../../models/categorySchema/attributeSchema");
const { success, error } = require("../response");

const createValues = async (req, res) => {
  try {
    const values = new valueSchema(req.body);
    const createValues = await values.save();
    res.status(200).json(success(res.statusCode,"Success",{createValues}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const checkStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = await valueSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode,"Success",{updateStatus}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const selectCategory = async (req, res) => {
  try {
    const categoryData = await category.find();
    res.status(200).json(success(res.statusCode,"Success",{categoryData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const selectSubCategory = async (req, res) => {
  try {
    const subCategoryData = await subCategory.find();
    res.status(200).json(success(res.statusCode,"Success",{subCategoryData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const selectSubSubCategory = async (req, res) => {
  try {
    const subSubCategoryData = await subSubCategory.find();
    res.status(200).json(success(res.statusCode,"Success",{subSubCategoryData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const selectAttribute = async (req, res) => {
  try {
    const attributeCategoryData = await attribute.find();
    res.status(200).json(success(res.statusCode,"Success",{attributeCategoryData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const valuesList = async (req, res) => {
  try {
    const list = await valueSchema.find({});
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const valuesUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const updateValues = await valueSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode,"Success",{updateValues}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const valuesSearch = async (req, res) => {
  try {
    const values = req.body.valuesName;
    const valuesData = await valueSchema.find({
      valuesName: { $regex: values, $options: "i" },
    });
    if (valuesData.length > 0) {
     return res.status(200).json(success(res.statusCode,"Success",{valuesData}));
    } else {
      res.status(200).json(error("Failed",res.statusCode));
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

module.exports = {
  createValues,
  valuesList,
  valuesUpdate,
  valuesSearch,
  selectCategory,
  selectSubCategory,
  selectSubSubCategory,
  selectAttribute,
  checkStatus,
};
