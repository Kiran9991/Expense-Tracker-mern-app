const ChatMessages = require('../models/chats');
const Users = require('../models/user');

// /chat/send
const addMessages = async(req, res) => {
    const { message } = req.body;
   try {
        const response = await ChatMessages.create({ chats: message, media: 'NA', });

        res.status(201).json({ message: 'successfully added', response });

    } catch(error) {
        console.log(error, '<<<<Internal server error!')
        return res.status(501).json({ message: error })
    }
}

// /chat/get
const getMessages = async (req, res) => {
    try {
        const messages = await ChatMessages.findAll();
        res.status(200).json({ message: 'successfully fetched', messages });
    } catch (error) {
        console.log(error, '<<<<Internal server error!');
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// /chat/users
const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(201).json({ message: 'successfully got users', users })
    }catch(error) {
        console.log(error, 'Internal server error!')
    }
}

module.exports = {
    addMessages,
    getMessages,
    getUsers
}