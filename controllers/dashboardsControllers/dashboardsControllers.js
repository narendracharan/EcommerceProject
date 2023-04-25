const userSchema = require("../../models/adminSchema/userSchema");
const orderSchema = require("../../models/orderSchema/orderSchema");

const userCount = async (req, res) => {
  try {
    const userCount = await userSchema.count();
    const orderCount = await orderSchema.count();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        userCount,
        orderCount,
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

const recentOrder = async (req, res) => {
  try {
    const list = await orderSchema.find({});
    res.status(400).json({
      error: true,
      error_code: 400,
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

const recentOrderSearch = async (req, res) => {
  try {
    const sellerName = req.body.sellerName;
    const searchData = await orderSchema.find({
      sellerName: { $regex: sellerName, $options: "i" },
    });
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        searchData,
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

const orderDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const details = await orderSchema.findById(id);
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        details,
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

module.exports = {
  userCount,
  recentOrder,
  recentOrderSearch,
  orderDetails
};
