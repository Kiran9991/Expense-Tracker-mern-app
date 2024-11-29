const User = require("../models/user");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const user = req.body;

    if (!user.email) {
      return res.status(501).json("Invalid data");
    }

    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        throw err;
      }

      User.create({
        username: user.email,
        password: hash,
      });
    });

    res.status(200).json({ message: "Successfully user is created" });
  } catch (err) {
    console.log(err, "Internal Server Error!");
  }
};

module.exports = {
  addUser,
};
