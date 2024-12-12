const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

    const { dataValues } = await User.findOne({ where: { username: email } });

    if (!dataValues) throw new Error(`User doesn't Exist!`)

    const result = await bcrypt.compare(password, dataValues.password)

    if(!result) throw new Error("Password doesn't Matched!")

    const userObj = {
      userId: dataValues.id, username: dataValues.username
    }
    const token = jwt.sign(userObj, 'kiran');

    res.status(200).json({ message: `Successfully sign in ${email}`, token})
  } catch (error) {
    res.status(401).json({ error: `${error.message}`})
  }
};

module.exports = {
  addUser, signin
};
