const productSchema = require("../../models/categorySchema/productSchema");

const createProduct = async (req, res) => {
  try {
    const product = new productSchema(req.body);
    const filepath = `/uploads/${req.file.filename}`;
    product.product_Pic = filepath;
    const saveProduct = await product.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        saveProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const productList = async (req, res) => {
  try {
    const list = await productSchema.find({});
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        list,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      error_code: 400,
      message: Error,
    });
  }
};

const productSearch = async (req, res) => {
  try {
    const product = req.body.productName;
    const productData = await productSchema.find({
      productName: { $regex: product, $options: "i" },
    });
    if (productData.length > 0) {
      res.status(200).json({
        error: false,
        error_code: 200,
        message: "Success",
        results: {
          productData,
        },
      });
    } else {
      res.status(200).json({
        error: true,
        error_code: 200,
        message: "Product Not found",
      });
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
  createProduct,
  productList,
  productSearch
};
