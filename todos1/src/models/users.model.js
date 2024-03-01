const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Users = db.define('Users', {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(30),
        allowNull:false,
        unique: true
    }

}); 

module.exports = Users;