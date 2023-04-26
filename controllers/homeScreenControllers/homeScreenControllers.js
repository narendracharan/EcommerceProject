const homeSchema = require("../../models/homeScreenSchema/homeScreenSchema");
const { error, success } = require("../response");

const createBannerOne = async (req, res) => {
  try {
    const banners = new homeSchema(req.body);
    const filepath = `/uploads/${req.file.filename}`;
    banners.homeScreenOne = filepath;
    const bannersData = await banners.save();
    res.status(201).json(success(res.statusCode, "Success", bannersData));
  } catch (err) {
    console.log(err);
    res.status(400).json(error(res.statusCode, { Failed }));
  }
};
const createBannerTwo = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenTwo = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success(res.statusCode, "Success", bannersData));
    } catch (err) {
      console.log(err);
      res.status(400).json(error(res.statusCode, { Failed }));
    }
  };
  
  const createBannerThree = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenThree = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success(res.statusCode, "Success", bannersData));
    } catch (err) {
      console.log(err);
      res.status(400).json(error(res.statusCode, { Failed }));
    }
  };

  const createBannerFour = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenFour = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success(res.statusCode, "Success", bannersData));
    } catch (err) {
      console.log(err);
      res.status(400).json(error(res.statusCode, { Failed }));
    }
  };

  const createBannerFive = async (req, res) => {
    try {
      const banners = new homeSchema(req.body);
      const filepath = `/uploads/${req.file.filename}`;
      banners.homeScreenFive = filepath;
      const bannersData = await banners.save();
      res.status(201).json(success(res.statusCode, "Success", bannersData));
    } catch (err) {
      console.log(err);
      res.status(400).json(error(res.statusCode, { Failed }));
    }
  };

module.exports = { createBannerOne,createBannerTwo ,createBannerThree,createBannerFour,createBannerFive};
