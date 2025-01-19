const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
  try {
    const user = req.body;

    const userEmail = user.email;

    const userName = await User.findOne({ where: { username: userEmail } });

    // console.log('>>>>>>>',userName.dataValues.username === userEmail)
    if (userName && userName.dataValues.username === userEmail) {
      return res.status(409).json({ message: "User is Already Exist!" });
    }

    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        throw err;
      }

      User.create({
        username: user.email,
        isPremium: false,
        password: hash,
      });
    });

    res.status(200).json({ message: "Successfully user is created" });
  } catch (err) {
    console.log(err, "Internal Server Error!");
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { username: email } });

    if (!user) throw new Error(`User doesn't Exist!`);

    const result = await bcrypt.compare(password, user.password);

    if (!result) throw new Error("Password doesn't Matched!");

    const userObj = {
      userId: user.id,
      username: user.username,
      isPremium: user.isPremium,
    };

    const token = jwt.sign(userObj, "kiran");

    res
      .status(200)
      .json({
        message: `Successfully sign in ${email}`,
        token,
        isPremium: user.isPremium,
      });
  } catch (error) {
    // console.log(error.message)
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  signin,
};
