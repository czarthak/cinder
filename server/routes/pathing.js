const router = require("express").Router();
const Path = require("../models/Path");

//create a pin
router.post("/", async (req, res) => {
  const newPath = new Path(req.body);
  try {
    const savedPath = await newPath.save();
    res.status(200).json(savedPath);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const paths = await Path.find();
    res.status(200).json(paths);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;