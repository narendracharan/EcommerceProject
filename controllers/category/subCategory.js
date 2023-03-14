const cateSchema = require("../../models/categorySchema/subCategorySchema");
const category = require("../../models/categorySchema/categorySchema");
const subSubCategory = require("../../models/categorySchema/subSubCategorySchema");

const subCategory = async (req, res) => {
  const subCategory = new cateSchema(req.body);
  try {
    await subCategory.save();
    res.status(200).json({
      status: "Success",
      message: "Sub Category Create Successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const checkSubSubcategory = async (req, res) => {
  const id = req.params.id;
  try {
    const checkData = await subSubCategory.find({ subCategory_Id: id});
    res.status(200).json({
      status: "Success",
      AllSubSubcategory: checkData,
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
    const cateId = cate.map((p) =>p._id);
    const cateName = cate.map((p) =>p.categoryName);
    const cateStatus = cate.map((p) =>p.status);
    const cateShilment = cate.map((p) =>p.shipmentService);
    res.status(200).json({
      status: "Success",
     cateId,
     cateName,
     cateStatus,
     cateShilment

    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const subCategoryList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json({
      status: "Success",
      message: "All Sub Category List",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const subCategoryUpdate = async (req, res) => {
  const id = req.params.id;
  const cate = await category.find();
  try {
    const update = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "SubCategory Updated",
      update
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const subCategorySearch = async (req, res) => {
  const subCategory = req.body.subCategory;
  try {
    const categoryData = await cateSchema.find({
      subCategory: { $regex: subCategory, $options: "i" },
    });
    if (categoryData.length > 0) {
      res.status(200).json({
        status: "Success",
        subCategoryDetails: categoryData,
      });
    } else {
      res.status(200).json({
        status: "Failed",
        message: "subCategory Not Found",
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
  subCategory,
  subCategoryList,
  subCategoryUpdate,
  subCategorySearch,
  selectCategory,
  checkSubSubcategory,
};
