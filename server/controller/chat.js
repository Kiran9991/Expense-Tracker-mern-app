const ChatMessages = require('../models/chats');

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

module.exports = {
    addMessages,
    getMessages
}