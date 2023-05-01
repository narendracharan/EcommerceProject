const cateSchema = require("../../models/categorySchema/subSubCategorySchema");
const category = require("../../models/categorySchema/categorySchema");
const subCategory = require("../../models/categorySchema/subCategorySchema");
const Attribute = require("../../models/categorySchema/attributeSchema");
const values = require("../../models/categorySchema/valuesSchema");
const attributeSchema = require("../../models/categorySchema/attributeSchema");
const { error, success } = require("../response");

const subSubCategory = async (req, res) => {
  try {
    const subSubCategory = new cateSchema(req.body);
    const saveSubSubCategory = await subSubCategory.save();
    res
      .status(200)
      .json(success(res.statusCode, "Success", { saveSubSubCategory }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

const checkStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updateStatus = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const attributeStatus = await attributeSchema.findOneAndUpdate(
      { subSubCategory_Id: id },
      req.body,
      { new: true }
    );
    const valuesStatus = await values.findOneAndUpdate(
      { subSubCategory_Id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(success(res.statusCode,"Success",{ updateStatus,
      attributeStatus,
      valuesStatus,}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const checkAttribute = async (req, res) => {
  try {
    const id = req.params.id;
    const checkData = await Attribute.find({ subSubCategory_Id: id });
    const valuesData = await values.find({ subSubCategory_Id: id });
    res.status(200).json(success(res.statusCode,"Success",{ checkData,
      valuesData,}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const selectCategory = async (req, res) => {
  try {
    const categoryData = await category.find();
    res.status(200).json(res.statusCode,"Success",{categoryData});
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

const subSubCategoryList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const subSubCategoryUpdate = async (req, res) => {
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

const subSubCategorySearch = async (req, res) => {
  try {
    const subSubCategory = req.body.subSubCategoryName;
    const categoryData = await cateSchema.find({
      subSubCategoryName: { $regex: subSubCategory, $options: "i" },
    });
    if (categoryData.length > 0) {
    return  res.status(200).json(success(res.statusCode,"Success",{categoryData}));
    } else {
      res.status(200).json(error("Data are Not Found",res.statusCode));
    }
  } catch (err) {
    res.status(400).json("Failed",res.statusCode);
  }
};


module.exports = {
  subSubCategory,
  subSubCategoryList,
  subSubCategoryUpdate,
  subSubCategorySearch,
  selectCategory,
  selectSubCategory,
  checkAttribute,
  checkStatus,
};
