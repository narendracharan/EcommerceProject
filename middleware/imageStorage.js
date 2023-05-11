const multer = require("multer");
const path=require("path")
var storage = multer.diskStorage({
  destination: function (req, res, callback) {
    callback(null,path.join(__dirname,"..","/public"));
  },
  filename: function (request, file, callback) {
    var ext = file.originalname.split(".");
    callback(null, Date.now() + "." + ext[ext.length - 1]);
  },
});
var upload = multer({ storage: storage }).array("product_Pic");
module.exports = function (req, res, next) {
  upload(req, res, (err) => {
    if (err) {
      console.log("er", err);
      res.status(400).send(err);
    } else {
      if (req.files && req.files.length > 0) {
        req.body.product_Pic = [];
        req.files.forEach((file) => {
          req.body.product_Pic.push(file.filename);
        });
      } else {
        req.fileurl = "";
      }
      next();
    }
  });
};