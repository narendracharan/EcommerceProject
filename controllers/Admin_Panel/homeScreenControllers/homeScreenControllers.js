const homeSchema = require("../../../models/Admin_PanelSchema/homeScreenSchema/homeScreenSchema");
const { error, success } = require("../../response");

exports.createBannerOne = async (req, res) => {
  try {
    const banners = new homeSchema(req.body);
    const filepath = `/${req.files.filename}`;
    banners.homeScreenOne = filepath;
    const bannersData = await banners.save();
    res.status(201).json(success( "Success",res.statusCode,  {bannersData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};

exports.createBannerTwo = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/${req.files.filename}`;
      banners.homeScreenTwo = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success("Success",res.statusCode,  {bannersData}));
    } catch (err) {
      res.status(400).json(error("Failed",res.statusCode));
    }
  };
  
  exports.createBannerThree = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/${req.files.filename}`;
      banners.homeScreenThree = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success("Success",res.statusCode,  {bannersData}));
    } catch (err) {
      console.log(err);
      res.status(400).json(error("Failed",res.statusCode));
    }
  };

  exports.createBannerFour = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/${req.files.filename}`;
      banners.homeScreenFour = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success( "Success",res.statusCode, {bannersData}));
    } catch (err) {
      console.log(err);
      res.status(400).json(error("Failed",res.statusCode));
    }
  };

  exports.createBannerFive = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/${req.files.filename}`;
      banners.homeScreenFive = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success("Success",res.statusCode,  {bannersData}));
    } catch (err) {
      res.status(400).json(error("Failed",res.statusCode));
    }
  };

