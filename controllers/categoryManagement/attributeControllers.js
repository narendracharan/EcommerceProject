const cateSchema = require("../../models/categorySchema/attributeSchema");
const category = require("../../models/categorySchema/categorySchema");
const subCategory = require("../../models/categorySchema/subCategorySchema");
const subSubCategory = require("../../models/categorySchema/subSubCategorySchema");
const values = require("../../models/categorySchema/valuesSchema");
const { success, error } = require("../response");

const createAttribute = async (req, res) => {
  try {
    const attribute = new cateSchema(req.body);
    const createAttribute = await attribute.save();
      res.status(200).json(success(res.statusCode,"Success",{createAttribute}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const checkStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const valuesStatus = await values.findOneAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode,"Success",{ updateStatus,
      valuesStatus}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const checkValues = async (req, res) => {
  try {
    const id = req.params.id;
    const checkData = await values.find({ attribute_Id: id });
    res.status(200).json(success(res.statusCode,"Success",{ checkData}));
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
    res.status(400).json("Failed",res.statusCode);
  }
};

const attributeList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const attributeUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(success(res.statusCode,"Success",{update}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const attributeSearch = async (req, res) => {
  try {
    const attribute = req.body.attributesName;
    const categoryData = await cateSchema.find({
      attributeName: {  $regex: attribute, $options: "i" },
    });
    if (categoryData.length > 0) {
     return res.status(200).json(success(res.statusCode,"Success",{categoryData}));
    } else {
      res.status(200).json(error("Data are Not Found",res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

module.exports = {
  createAttribute,
  attributeList,
  attributeUpdate,
  attributeSearch,
  selectCategory,
  selectSubCategory,
  selectSubSubCategory,
  checkValues,
  checkStatus
};
