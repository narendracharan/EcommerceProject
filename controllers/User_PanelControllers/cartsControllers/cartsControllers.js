const productSchema = require("../../../models/Admin_PanelSchema/categorySchema/productSchema");
const coupanSchema = require("../../../models/Admin_PanelSchema/coupanSchema/coupanSchema");
const cartsSchema = require("../../../models/User_PanelSchema/cartSchema/cartsSchema");
const cartSchema = require("../../../models/User_PanelSchema/cartSchema/cartsSchema");
const userSchema = require("../../../models/User_PanelSchema/userSchema/userSchema");
const { error, success } = require("../../response");
const User=require("../../../models/Admin_PanelSchema/userSchema/userSchema")

exports.addToCart=async(req,res)=>{
  try{
const {carts}=req.body
const {_id}=req.user
let products=[]
const user= await userSchema.findById(_id)
const alreadyExitedCart=await cartSchema.findOne({user_Id:user._id})

for(let i=0;i<carts.length;i++){
  let object={}
  object.product_Id=carts[i].product_Id
  object.quantity=carts[i].quantity
  let getPrice=await productSchema.findById(carts[i].product_Id).select("Price").exec()
  console.log(getPrice);
  object.Price= getPrice.Price
  products.push(object)

}
let cartsTotal=0
for(let i=0;i<products.length;i++){
  cartsTotal=cartsTotal+products[i].Price * products[i].quantity
}
let newCarts=await new cartSchema({
  products,
  cartsTotal,
  user_Id:user?._id
}).save()
res.status(200).json(success(res.status,"Success",{newCarts}))
  }catch(err){
    console.log(err);
    res.status(400).json(error("Failed", res.statusCode));

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
  const list=await cartsSchema.find({}).populate("products.product_Id")
  res.status(200).json(success(res.statusCode,"Success",{list}))
  }catch(err){
    console.log(err);
    res.status(400).json(error("Failed",res.statusCode))
  }
}

exports.applyCoupan=async(req,res)=>{
  try{
const coupanCode=req.body.coupanCode
const {_id}=req.user
const validCoupan=await coupanSchema.findOne({coupanCode:coupanCode})
if(!validCoupan==null){
throw new Error("Invalid Coupan")
}
console.log(validCoupan.DiscountType);
const user=await User.findById(_id)
let cartsTotal=await cartSchema.findOne({user_Id:user._id}).populate("products.product_Id").exec()
console.log(cartsTotal);
let totalAfterDiscount=(cartsTotal-validCoupan.DiscountType)
await cartsSchema.findOneAndUpdate({user_Id:user._id},{totalAfterDiscount},{new:true})
console.log(totalAfterDiscount);
res.status(200).json(success(res.statusCode,"Success",{totalAfterDiscount}))
  }catch(err){
    console.log(err);
    res.status(400).json(error("Failed",res.statusCode))
  }
}