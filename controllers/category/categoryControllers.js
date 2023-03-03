const cateSchema = require("../../models/categorySchema");

const createCategory = async (req, res) => {
  const category = new cateSchema(req.body);
  try {
    const filepath = `/uploads/${req.file.filename}`;
    category.categoryPic = filepath;
    await category.save();
    res.status(201).json({
      status: "Success",
      message: "Category Create Successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const categoryList = async (req, res) => {
  try {
    const list = await cateSchema.find({});
    res.status(200).json({
      status: "Success",
      message: "All Category List",
      list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const categoryUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await cateSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "Category Updated Successfully",
      updated,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const categorySearch = async (req, res) => {
  const category = req.body.categoryName;
  try {
    const categoryData = await cateSchema.find({
      categoryName: { $regex: category, $options: "i" },
    });
    if (categoryData.length > 0) {
      res.status(200).json({
        status: "Success",
        categoryDetails: categoryData,
      });
    }else{
        res.status(200).json({
            status:"Failed",
            message:"Category Not Found"
        })
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports={
    createCategory,
    categoryList,
    categoryUpdate,
    categorySearch
}