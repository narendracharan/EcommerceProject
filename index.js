require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyparser = require("body-parser");
const commonRoutes = require("./routes/commonRoutes");
require("./models/config");
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use("/",commonRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running port no:${process.env.PORT}"`);
});
