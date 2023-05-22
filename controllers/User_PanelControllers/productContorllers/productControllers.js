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
   if(details.stockQuantity==0){
    res.status(400).json(error("Product Out of Stock", res.statusCode));
   }
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

exports.relatedProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await productSchema.find({ category_Id: id });
    res.status(200).json(success(res.statusCode, "Success", { productData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.compareProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const reletedData = await productSchema.find({ category_Id: id }).limit(3);
    res.status(200).json(success(res.statusCode, "Success", { reletedData }));
  } catch (err) {
    res.status(400).json(error("Failed", res.statusCode));
  }
};

exports.filterPrice = async (req, res) => {
  try {
    const { Price } = req.body;
    const quearyObjetct = {};
    if (Price) {
      quearyObjetct.Price = Price;
    }
    const filter = await productSchema.find(quearyObjetct);
    res.status(200).json(success(res.statusCode, "Success", { filter }));
  } catch (err) {
    console.log(err);
    res.status(400).json(error("Failed", res.statusCode));
  }
};
exports.lowPrice=async(req,res)=>{
  try{
const productlist=await productSchema.find({}).sort({Price:1})
res.status(200).json(success(res.statusCode,"Success",{productlist}))
  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}

exports.highPrice=async(req,res)=>{
  try{
const productList=await productSchema.find({}).sort({Price:-1})
res.status(200).json(success(res.statusCode,"Success",{productList}))

  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}

exports.asendingProduct=async(req,res)=>{
  try{
const productList=await productSchema.find({}).sort({productName:-1})
res.status(200).json(success(res.statusCode,"Success",{productList}))

}catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}

exports.descendingProduct=async(req,res)=>{
  try{
    const productList=await productSchema.find({}).sort({productName:1})
    res.status(200).json(success(res.statusCode,"Success",{productList}))
    
  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
    }
}


exports.trandingProduct=async(req,res)=>{
  try{
const productlist= await productSchema.find({}).sort({productName:-1}).limit(4)
    res.status(200).json(success(res.statusCode,"Success",{productlist}))
  }catch(err){
    res.status(400).json(error("Failed",res.statusCode))
  }
}
// exports.rating=async(req,res)=>{
//   try{
// const {_id}=req.body.postedby
// const {star,product_Id}=req.body
// const product=await productSchema.findById(product_Id)
// let alreadyRated=product.ratings.find((userId)=>userId.postedby)
// if(alreadyRated){
//   const total=0
//   const updateRating=await productSchema.updateOne(
//     {
//       ratings:{$elemMatch:alreadyRated}
//     },{
//       $set:{"ratings.$.star":star}
//     },{
//       new:true
//     }
//   )
//   for(let i=0;i<updateRating.length;i++){
//     total=total+updateRating[i]
//   }
//   console.log(total);
//   return res.status(200).json(success(res.statusCode,"Success",{updateRating}))
// }else{
//   let totalrating=0
//   const ratedProduct=await productSchema.findByIdAndUpdate(product_Id,{
//     $push:{
//       ratings:{
//         star:star,
//         postedby:_id
//       }
//     }
//   },{
//     new:true
//   })
//   for(let i=0;i<ratedProduct.ratings.length;i++){
//     totalrating=totalrating+ratedProduct.ratings[i].star
//   }
//   let newrating= await new productSchema({
//     totalrating
//   }).save()
//   res.status(200).json(success(res.statusCode,"Success",{ratedProduct,newrating}))
// }
// }catch(err){
//   console.log(err);
//     res.status(400).json(error("Failed",res.statusCode))
//   }
// }
