const User = require("../models/User");

const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password, salt);

    const { username, email } = req.body
    const newUser = new User({
      username,
      email,
      password: hashPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("User not Found");
    }
    const hashedPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if(!hashedPassword){
      return res.status(400).json("Wrong Password")
    }
    res.status(200).json(user);
  } catch (error) {
    const errorMessage = new Error('Hubo problemas para autenticar al usuario.')
    res.status(500).json(errorMessage);
  }
});

module.exports = router;
