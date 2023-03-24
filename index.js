require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyparser = require("body-parser")
const path=require("path");
const commonRoutes = require("./routes/commonRoutes");
require("./models/config");
app.use(bodyparser.json());
app.use(morgan("dev"));
app.set("view engine","ejs")
const staticPath=path.join(__dirname,"./public")
app.use("/",commonRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running port no:${process.env.PORT}"`);
});
