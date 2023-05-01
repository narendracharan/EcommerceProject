const homeSchema = require("../../models/homeScreenSchema/homeScreenSchema");
const { error, success } = require("../response");

const createBannerOne = async (req, res) => {
  try {
    const banners = new homeSchema(req.body);
    const filepath = `/uploads/${req.file.filename}`;
    banners.homeScreenOne = filepath;
    const bannersData = await banners.save();
    res.status(201).json(success( "Success",res.statusCode,  {bannersData}));
  } catch (err) {
    res.status(400).json(error("Failed",res.statusCode));
  }
};
const createBannerTwo = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenTwo = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success("Success",res.statusCode,  {bannersData}));
    } catch (err) {
      res.status(400).json(error("Failed",res.statusCode));
    }
  };
  
  const createBannerThree = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenThree = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success("Success",res.statusCode,  {bannersData}));
    } catch (err) {
      console.log(err);
      res.status(400).json(error("Failed",res.statusCode));
    }
  };

  const createBannerFour = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenFour = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success( "Success",res.statusCode, {bannersData}));
    } catch (err) {
      console.log(err);
      res.status(400).json(error("Failed",res.statusCode));
    }
  };

  const createBannerFive = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenFive = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success("Success",res.statusCode,  {bannersData}));
    } catch (err) {
      res.status(400).json(error("Failed",res.statusCode));
    }
  };

module.exports = { createBannerOne,createBannerTwo ,createBannerThree,createBannerFour,createBannerFive};
