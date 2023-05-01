const productSchema = require("../../models/categorySchema/productSchema");
const { success, error } = require("../response");

const createProduct = async (req, res) => {
  try {
    const product = new productSchema(req.body);
    const filepath = `/${req.file.filename}`;
    product.product_Pic = filepath;
    const saveProduct = await product.save();
    res.status(200).json(success(res.statusCode,"Success",{saveProduct}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

const productList = async (req, res) => {
  try {
    const list = await productSchema.find({});
    res.status(200).json(success(res.statusCode,"Success",{list}));
  } catch (err) {
    res.status(400).json("Failed",res.statusCode);
  }
};

const productSearch = async (req, res) => {
  try {
    const product = req.body.productName;
    const productData = await productSchema.find({
      productName: { $regex: product, $options: "i" },
    });
    if (productData.length > 0) {
     return res.status(200).json(success(res.statusCode,"Success",{productData}));
    } else {
      res.status(200).json(error("Product Not found",res.statusCode));
    }
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

module.exports = {
  createProduct,
  productList,
  productSearch
};
