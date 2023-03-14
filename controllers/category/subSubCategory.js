const cateSchema = require("../../models/categorySchema/subSubCategorySchema");
const category = require("../../models/categorySchema/categorySchema");
const subCategory = require("../../models/categorySchema/subCategorySchema");
const Attribute = require("../../models/categorySchema/attributeSchema");
const values=require("../../models/categorySchema/valuesSchema")

const subSubCategory = async (req, res) => {
  const subSubCategory = new cateSchema(req.body);
  try {
    await subSubCategory.save();
    res.status(200).json({
      status: "Success",
      message: "subSubCategory Created",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      messsage: err.messsage,
    });
  }
};


const checkAttribute = async (req, res) => {
  const id = req.params.id;
  try {
    const checkData = await Attribute.find({ subSubCategory_Id: id});
    const valuesData=await values.find({subSubCategory_Id:id})
    res.status(200).json({
      status: "Success",
      allAttribute: checkData,
      valuesData
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
    const cateId = cate.map((p) => p._id);
    const cateName = cate.map((p) => p.categoryName);
    const cateStatus = cate.map((p) => p.status);
    const cateShipment = cate.map((p) => p.shipmentService);
    res.status(200).json({
      status: "Success",
      cateId,
      cateName,
      cateStatus,
      cateShipment
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
    const subCateCategoryID = subCate.map((p) =>p.category_Id);
    const subCateCategoryName = subCate.map((p) =>p.subCategoryName);
    const subCateCategorystatus = subCate.map((p) =>p.status);
    const subCateCategoryshilpment = subCate.map((p) =>p.shipmentService);
    res.status(200).json({
      status: "Success",
      subCateCategoryID ,
      subCateCategoryName,
      subCateCategorystatus,
      subCateCategoryshilpment
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const subSubCategoryList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json({
      status: "Success",
      message: "All SubSubCategory List",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const subSubCategoryUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "SubSubCategory Updated",
      update,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const subSubCategorySearch = async (req, res) => {
  const subSubCategory = req.body.subSubCategory;
  try {
    const categoryData = await cateSchema.find({
      subSubCategory: { $regex: subSubCategory, $options: "i" },
    });
    if ((categoryData, length > 0)) {
      res.status(200).json({
        status: "Success",
        subSubCategoryDetails: categoryData,
      });
    } else {
      res.status(200).json({
        status: "Failed",
        message: "SubSubCategory Not Found",
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
  subSubCategory,
  subSubCategoryList,
  subSubCategoryUpdate,
  subSubCategorySearch,
  selectCategory,
  selectSubCategory,
  checkAttribute,
};
