const orderSchema = require("../../models/orderSchema/orderSchema");

const createOrder = async (req, res) => {
  try {
    const order = new orderSchema(req.body);
    const orderData = await order.save();
    res.status(200).json({
      error: false,
      error_code: 200,
      message: "Success",
      results: {
        orderData,
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

const orderList = async (req, res) => {
  try {
    const list = await orderSchema.find({});
    res.status(200).json({
      error: 200,
      error_code: false,
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

const orderSearch=async(req,res)=>{
    try{
const sellerName=req.body.sellerName
const orderData=await orderSchema.find({
    sellerName: { $regex: sellerName, $options: "i" },
})
if(orderData.length >0){
    res.status(200).json({
        error:false,
        error_code:200,
        message:"Success",
        results:{
            orderData
        }
    })
}else{
    res.status(200).json({
        error:true,
        error_code:200,
        message:"Order not found"
    })
}
    }catch(err){
        res.status(400).json({
            error:true,
            error_code:400,
            message:Error
        })
    }
}
module.exports = {
  createOrder,
  orderList,
  orderSearch
};
