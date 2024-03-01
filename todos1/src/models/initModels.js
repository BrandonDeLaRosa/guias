const Users = require('../models/users.model');
const Todos = require('../models/todos.model');


const initModels = () => {
    Users.hasMany(Todos, {foreignKey:"userId"});
    Todos.belongsTo(Users, {foreignKey: "userId"});
}

module.exports = initModels;
