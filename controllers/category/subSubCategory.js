const cateSchema = require("../../models/categorySchema");

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
};
