const { INTEGER, STRING, DataTypes } = require("sequelize");

const sequelize = require("../database/db");

const ChatMessages = sequelize.define("chatMessages", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true,
  },
  chats: {
    type: STRING,
    allowNull: false,
  },
  media: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = ChatMessages;
