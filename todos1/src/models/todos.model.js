const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Todos = db.define('Todos', {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },
    title:{
        type: DataTypes.STRING(30),
        allowNull:false,
        unique: true
    },
    description:{
        type: DataTypes.TEXT,
        defaultValue: "Not provided"
    },
    isCompleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

}); 

module.exports = Todos;