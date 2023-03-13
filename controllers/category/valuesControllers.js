const valueSchema = require("../../models/categorySchema/valuesSchema");
const category = require("../../models/categorySchema/categorySchema");
const subCategory = require("../../models/categorySchema/subCategorySchema");
const subSubCategory = require("../../models/categorySchema/subSubCategorySchema");
const attribute = require("../../models/categorySchema/attributeSchema");

const createValues = async (req, res) => {
  const values = new valueSchema(req.body);
  try {
    await values.save();
    res.status(200).json({
      status: "Success",
      message: "Create Values Sucessfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const selectCategory = async (req, res) => {
  const cate = await category.find();
  try {
    const cateData = cate.map((p) => p._id);
    res.status(200).json({
      status: "Success",
      catelist: cateData,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const selectSubCategory = async (req, res) => {
  const subCate = await subCategory.find();
  try {
    const subCateData = subCate.map((p) => p._id);
    res.status(200).json({
      status: "Success",
      subCateList: subCateData,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.messagej,
    });
  }
};

const selectSubSubCategory = async (req, res) => {
  const subSubCate = await subSubCategory.find();
  try {
    const subSubCateData = subSubCate.map((p) => p.subCategory_Id);
    res.status(200).json({
      status: "Success",
      subSubCateList: subSubCateData,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const selectAttribute = async (req, res) => {
  const attributeCate = await attribute.find();
  try {
    const attributeCateData = attributeCate.map((p) => p._id);
    res.status(200).json({
      status: "Success",
      attributeCateList: attributeCateData,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const valuesList = async (req, res) => {
  try {
    const list = await valueSchema.find({});
    res.status(200).json({
      status: "Success",
      message: "All Values List",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const valuesUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const updateValues = await valueSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "Values Updated",
      updateValues,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const valuesSearch = async (req, res) => {
  const values = req.body.valuesName;
  try {
    const valuesData = await valueSchema.find({
      valuesName: { $regex: values, $options: "i" },
    });
    if (valuesData.length > 0) {
      res.status(200).json({
        status: "Success",
        valuesDetails: valuesData,
      });
    } else {
      res.status(200).json({
        status: "Failed",
        message: "Values not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
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
};
