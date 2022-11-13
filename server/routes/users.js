const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(7);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    //create new user
    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
        city: req.body.city
      });
    
    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong email or password");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong username or password");

    //send response
    res.status(200).json({ _id: user._id, email: user.email });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;