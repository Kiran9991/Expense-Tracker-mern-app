const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

const resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const mailOption = {
        from: process.env.EMAIL,
        to: process.env.RECEIVER,
        subject:'Test Email from kiran agiwale',
        text:'Hello, this is a test email by Develope Kiran Agiwale'
    }

    transporter.sendMail(mailOption, (error, info) => {
        if(error) {
            console.log('errorinresertPss', error);
        }else {
            console.log('successfully sender', info.response);
            res.status(201).json({ message: 'Successfully email sender' })
        }
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
    resetPassword,
};
