const productSchema = require("../../../models/Admin_PanelSchema/categorySchema/productSchema")
const coupanSchema = require("../../../models/Admin_PanelSchema/coupanSchema/coupanSchema")
const cartsSchema = require("../../../models/User_PanelSchema/cartSchema/cartsSchema")
const orderSchema=require("../../../models/User_PanelSchema/orderSchema/orderSchema")
const userSchema = require("../../../models/User_PanelSchema/userSchema/userSchema")
const { error, success } = require("../../response")


// exports.createOrder=async(req,res)=>{
//     try{
//         const order=new orderSchema(req.body)
//         console.log(order);
//     //  const {COD,coupanApllied}=req.body
//     //  const {_id}=req.user
//     //  if(!COD) throw new Error("create cash order failed")
//   const user =await userSchema.findBryId(_id)
//   let userCarts=await cartsSchema.findOne({user_Id:user._id})
//   let carts=await cartsSchema.find({})
//   console.log(carts);
//   const val=await coupanSchema.find({})
// let DiscountType=val.map((x)=>x.DiscountType)
// const cartsTotal=carts.map((cartsTotal)=>cartsTotal.cartsTotal)
// let subtotal=0
// for(let i=0;i<cartsTotal.length;i++){
//   subtotal=subtotal+cartsTotal[i]
// }
// var cartsTotalSum=(subtotal-DiscountType/100)
// console.log(cartsTotalSum);
// // let finalAmount=0
// // if(coupanApllied && cartsTotalSum){
// //     finalAmount=cartsTotalSum *100
// // }else{
// //     finalAmount=subtotal*100
// // }
// // let newOrder=await new ord erSchema({
// //     products:userCarts.products,
// //     paymentIntent:{
// //         _id:uniqid(),method:"COD",
// //         amount:finalAmount,
// //         status:"Cash on delivery",
// //         createdAt:Date.now(),
// //         currency:"usd"
// //     },
// //     user_Id:user._id,
// //     orderStatus:"cash on delivery "
// // }).save()
// // console.log(newOrder);
// // let update=userCarts.products.map((item)=>{
// //     return {
// //         updateOne:{
// //             filter:{_id:item.product_Id._id},
// //             update:{$inc:{count:-item.quantity,sold:+item.quantity}}
// //         }
// //     }
// // })
// // const upated=await productSchema.bulkWrite(update,{})
// //res.status(200).json(success(res.statusCode,"Success",{cartsTotalSum,upated}))
//     }catch(err){
//         res.status(400).json(error("Failed",res.statusCode))
//     }
// }


exports.createOrder = async (req, res) => {
  try {
    const { carts } = req.body;
    let products = [];
     for (let i = 0; i < carts.length; i++) {
      let object = {};
      object.product_Id = carts[i].product_Id;
      object.user_Id=carts[i].user_Id
      object.quantity = carts[i].quantity;
      let getPrice = await productSchema
        .findById(carts[i].product_Id)
        .select("Price")
        .exec();
          object.Price = getPrice.Price;
          products.push(object);
        }
    let cartsTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartsTotal = cartsTotal + products[i].Price * products[i].quantity;
    }
    let newCarts = await new orderSchema({
      products,
      cartsTotal,
      // user_Id,
      // address_Id
    }).save();
    res.status(200).json(success(res.status, "Success", { newCarts }));
   } catch (err) {
    console.log(err);
    res.status(400).json(error("Failed", res.statusCode));
  }
};