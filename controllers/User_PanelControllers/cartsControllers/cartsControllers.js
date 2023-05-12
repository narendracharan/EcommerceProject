const { TokenExpiredError } = require("jsonwebtoken");
const cartsSchema = require("../../../models/User_PanelSchema/cartSchema/cartsSchema");
const cartSchema = require("../../../models/User_PanelSchema/cartSchema/cartsSchema");
const { error, success } = require("../../response");
const categorySchema = require("../../../models/Admin_PanelSchema/categorySchema/categorySchema");

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
      .find({ product_Id: id })
      .select({ quantity: quantity, _id: 0 })
      .populate("product_Id", {
        productName: 1,
        Price: 1,
        product_Pic: 1,
        _id: 0,
      });
    const product = item.map(({ product_Id }) => product_Id);
    const price = product.map(({ Price }) => Price);
    const Price = price.reduce((a, b) => {
      return a + b;
    });
    const totalPrice = Price * quantity;
    res
      .status(200)
      .json(success(res.statusCode, "Success", { totalPrice, Price }));
  } catch (err) {
    console.log(err);
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.totalCarts=async(req,res)=>{
  try{
    const item=await categorySchema.find().populate("coupan_Id",{coupanCode:1,DiscountType:1,_id:0})
    const coupan=item.map(({coupan_Id})=>coupan_Id)
    const product = item.map(({ product_Id }) => product_Id);
    const price = product.map(({ Price }) => Price);
    const subtotal = price.reduce((a, b) => {
      return a + b;
    });
   const discount=coupan.map(({DiscountType})=>DiscountType)
   const total=subtotal-discount
   d
  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}


exports.deleteProduct=async(req,res)=>{
  try{
    const id=req.params.id
    const item=await cartSchema.findByIdAndDelete(id)
  res.status(200).json(success(res.statusCode,"Success",{item}))
  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}

exports.cartsList=async(req,res)=>{
  try{
  const list=await cartsSchema.find().populate("product_Id",{productName:1,product_Pic:1,Price:1,oldPrice:1,quantity:1,totalPrice:1})
  res.status(200).json(success(res.statusCode,"Success",{list}))

  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}