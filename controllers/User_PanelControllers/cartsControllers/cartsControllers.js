const cartSchema = require("../../../models/User_PanelSchema/cartSchema/cartsSchema");
const { error, success } = require("../../response");

exports.addToCart = async (req, res) => {
  try {
    const carts = new cartSchema(req.body);
    const saveCarts = await carts.save();
    res
      .status(200)
      .json(success(res.statusCode, "Add to Cart Successfully", { saveCarts }));
  } catch (err) {
    req.status(400).json(error("Failed", res.statusCode));
  }
};

exports.myCarts = async (req, res) => {
  try {
    const id = req.params.id;
    const quantity = req.body.quantity;
    const item = await cartSchema
      .find({ user_Id: id })
      .select({ quantity: quantity, _id: 0 })
      .populate("product_Id", {
        productName: 1,
        Price: 1,
        product_Pic: 1,
        _id: 0,
      });
    const product = item.map(({ product_Id }) => product_Id);
    const price = product.map(({ Price }) => Price);
    const totalPrice = price.reduce((a, b) => {
      return a + b;
    });
    const total = totalPrice * quantity;
    res
      .status(200)
      .json(success(res.statusCode, "Success", { totalPrice, total }));
  } catch (err) {
    console.log(err);
    res.status(400).json(error("Failed", res.statusCode));
  }
};
