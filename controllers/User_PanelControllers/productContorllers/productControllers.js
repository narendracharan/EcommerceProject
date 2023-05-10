const productSchema = require("../../../models/Admin_PanelSchema/categorySchema/productSchema");
const { error, success } = require("../../response");

exports.productList = async (req, res) => {
  try {
    const list = await productSchema.find({}).sort({ _id: -1 });
    res.status(200).json(success(res.statusCode, "Success", { list }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.productDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const details = await productSchema.findById(id);
    res.status(200).json(success(res.statusCode, "Success", { details }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.productSearch = async (req, res) => {
  try {
    const productName = req.body.productName;
    const productData = await productSchema.find({
      productName: { $regex: productName, $options: "i" },
    });
    if (productData.length > 0) {
      return res
        .status(200)
        .json(success(res.statusCode, "Success", { productData }));
    }
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};
