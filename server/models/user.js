const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('User', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User;