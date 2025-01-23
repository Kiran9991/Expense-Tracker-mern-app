const nodemailer = require("nodemailer");
const User = require('../models/user');

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail = async (req, res) => {
  const { email } = req.body;
  try {
    // const validEmail = await User.findOne({ where: { username: email }});
    
    // if(!validEmail) {
    //   throw 'User Email Id is Invalid!';
    // }

    const mailOption = {
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password Link",
      text: `this is a link to a reset password form 
      Click here to redirect to Reset password form 
      http://localhost:3000/reset-password `,
    };

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        throw 'internal server error'
      } else {
        console.log("successfully sender", info.response);
        res.status(201).json({ message: "Successfully email sended" });
      }
    });
  } catch (error) {
    console.log('>>',error,);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  sendEmail,
};
